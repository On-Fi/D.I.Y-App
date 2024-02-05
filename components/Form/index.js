import styled from "styled-components";
import { useState } from "react";
import { Image } from "cloudinary-react";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button";
import themes from "@/components/Themes";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
  margin: auto;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  &:focus {
    outline: 2px solid ${(props) => themes[props.theme].primaryButtonColor};
  }
`;

const UploadSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledStep = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MaterialInput = styled.div`
  display: flex;
`;

const UploadButtonSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RadioInput = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid ${(props) => themes[props.theme].primaryButtonColor};
  border-radius: 50%;
  margin-right: 5px;
  outline: none;
  &:checked {
    background-color: ${(props) => themes[props.theme].primaryButtonColor};
  }
`;

const RadioInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const CategoryContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export default function Form({ onSubmit, onCancel, theme, project = {} }) {
  const [imageSelected, setImageSelected] = useState("");
  const [imageId, setImageId] = useState(project.image || "/sample-image.png");
  const [steps, setSteps] = useState(
    project.instructions || [{ id: uuidv4(), text: "" }]
  );
  const [tools, setTools] = useState(
    project.tools || [{ id: uuidv4(), name: "" }]
  );
  const [material, setMaterial] = useState(
    project.material || [{ id: uuidv4(), amount: "", name: "" }]
  );
  const [time, setTime] = useState("24");

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "diy-app");
    const response = await fetch("/api/images", {
      method: "POST",
      body: formData,
      headers: { "Data-type": "application/json" },
    });
    const image = await response.json();
    setImageId(image.url);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const projectData = Object.fromEntries(formData);
    projectData.image = imageId;
    projectData.instructions = steps;
    projectData.tools = tools;
    projectData.material = material;

    onSubmit(projectData);
  }

  function onDurationChange(event) {
    setTime(event.target.value);
  }

  function handleAddStep() {
    const lastStep = steps[steps.length - 1];
    if (!lastStep || lastStep.text.trim() !== "") {
      setSteps([...steps, { id: uuidv4(), text: "" }]);
    } else {
      alert("Please fill in the previous step first.");
    }
  }

  function handleStepRemoval(id) {
    console.log(id);
    setSteps(steps.filter((step) => step.id !== id));
  }

  function handleInstructionInput(text, id) {
    if (text !== "") {
      setSteps(
        steps.map((step) => (step.id === id ? { ...step, text: text } : step))
      );
    } else {
      setSteps(steps.filter((step) => step.text.trim() !== ""));
    }
  }

  function handleAddTool() {
    const lastTool = tools[tools.length - 1];
    if (!lastTool || lastTool.name.trim() !== "") {
      setTools([...tools, { id: uuidv4(), name: "" }]);
    } else {
      alert("Please fill in the previous tool first.");
    }
  }

  function handleToolInput(name, id) {
    setTools(
      tools.map((tool) => (tool.id === id ? { ...tool, name: name } : tool))
    );
  }

  function handleToolRemoval(id) {
    setTools(tools.filter((tool) => tool.id !== id));
  }

  function handleAddMaterial() {
    const lastMaterial = material[material.length - 1];
    if (!lastMaterial || lastMaterial.name.trim() !== "") {
      setMaterial([...material, { id: uuidv4(), name: "" }]);
    } else {
      alert("Please fill in the previous item first.");
    }
  }

  function handleMaterialAmountInput(amount, id) {
    setMaterial(
      material.map((item) =>
        item.id === id ? { ...item, amount: amount } : item
      )
    );
  }

  function handleMaterialNameInput(name, id) {
    setMaterial(
      material.map((item) => (item.id === id ? { ...item, name: name } : item))
    );
  }

  function handleMaterialRemoval(id) {
    setMaterial(material.filter((item) => item.id !== id));
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <CategoryContainer>
          <label htmlFor="title">Title:*</label>
          <StyledInput
            theme={theme}
            type="text"
            id="title"
            name="title"
            defaultValue={project.title}
            required
          />
        </CategoryContainer>

        <label htmlFor="image">Image:</label>
        <UploadSection>
          <Image src={imageId} width="100" crop="scale" alt="beispiel image" />
          <UploadButtonSection>
            <input
              type="file"
              name="image"
              title="image"
              onChange={(event) => setImageSelected(event.target.files[0])}
            />
            <button type="button" onClick={uploadImage}>
              Upload an Image
            </button>
          </UploadButtonSection>
        </UploadSection>

        <CategoryContainer>
          <label htmlFor="category">Category:* </label>
          <RadioInputContainer>
            {["garden", "fashion", "home", "kitchen", "bathroom"].map(
              (entry) => (
                <label htmlFor={entry} key={entry}>
                  <RadioInput
                    theme={theme}
                    type="radio"
                    value={entry}
                    name="category"
                    id={entry}
                    required
                    defaultChecked={project.category === entry}
                  />
                  {entry}
                </label>
              )
            )}
          </RadioInputContainer>
        </CategoryContainer>

        <CategoryContainer>
          <label htmlFor="difficulty">Difficulty:*</label>
          <RadioInputContainer>
            {["beginner", "advanced", "expert"].map((entry) => (
              <label key={entry}>
                <RadioInput
                  theme={theme}
                  type="radio"
                  value={entry}
                  name="difficulty"
                  id={entry}
                  required
                  defaultChecked={project.difficulty === entry}
                />
                {entry}
              </label>
            ))}
          </RadioInputContainer>
        </CategoryContainer>

        <CategoryContainer>
          <label htmlFor="priceCategory">Price category:*</label>
          <RadioInputContainer>
            {["€", "€€", "€€€"].map((entry) => (
              <label key={entry}>
                <RadioInput
                  theme={theme}
                  type="radio"
                  value={entry}
                  name="priceCategory"
                  id={entry}
                  required
                  defaultChecked={project.priceCategory === entry}
                />
                {entry}
              </label>
            ))}
          </RadioInputContainer>
        </CategoryContainer>

        <CategoryContainer>
          <label htmlFor="time">Duration: {time} hours</label>
          <StyledInput
            theme={theme}
            type="range"
            id="time"
            name="time"
            min="0"
            max="48"
            defaultValue={project.time || 24}
            onChange={onDurationChange}
          />
        </CategoryContainer>

        <CategoryContainer>
          <label htmlFor="tools">Tools:*</label>
          {tools.map((tool) => (
            <InputContainer key={tool.id}>
              <StyledInput
                theme={theme}
                id="tool"
                name="tool"
                defaultValue={tool.name}
                placeholder='e.g. "hammer"'
                onInput={(event) =>
                  handleToolInput(event.target.value, tool.id)
                }
                required
              />
              <Button
                theme={theme}
                type="button"
                color="secondary"
                onClick={() => handleToolRemoval(tool.id)}
              >
                x
              </Button>
            </InputContainer>
          ))}
          <Button
            theme={theme}
            color="secondary"
            type="button"
            onClick={handleAddTool}
          >
            add tool
          </Button>
        </CategoryContainer>

        <CategoryContainer>
          <label htmlFor="material">Material:*</label>
          {material.map((item) => (
            <MaterialInput key={item.id}>
              <StyledInput
                theme={theme}
                type="number"
                min="1"
                id="material"
                name="material"
                placeholder="e.g. 5"
                defaultValue={item.amount}
                onInput={(event) =>
                  handleMaterialAmountInput(event.target.value, item.id)
                }
                required
              />
              <StyledInput
                theme={theme}
                key={item.id}
                id="material"
                name="material"
                defaultValue={item.name}
                placeholder="nails"
                onInput={(event) =>
                  handleMaterialNameInput(event.target.value, item.id)
                }
                required
              />
              <Button
                type="button"
                theme={theme}
                color="secondary"
                onClick={() => handleMaterialRemoval(item.id)}
              >
                x
              </Button>
            </MaterialInput>
          ))}
          <Button
            theme={theme}
            color="secondary"
            type="button"
            onClick={handleAddMaterial}
          >
            add material
          </Button>
        </CategoryContainer>

        <CategoryContainer>
          <label htmlFor="instructions">Instructions:*</label>
          {steps.map((step, index) => (
            <StyledStep key={step.id}>
              <label>{index + 1}.</label>
              <StyledInput
                theme={theme}
                id="instructions"
                name="instructions"
                defaultValue={step.text}
                onInput={(event) =>
                  handleInstructionInput(event.target.value, step.id)
                }
                required
              ></StyledInput>
              <Button
                type="button"
                theme={theme}
                color="secondary"
                onClick={() => handleStepRemoval(step.id)}
              >
                x
              </Button>
            </StyledStep>
          ))}
          <Button
            theme={theme}
            color="secondary"
            type="button"
            onClick={handleAddStep}
          >
            add step
          </Button>
        </CategoryContainer>
        <Button theme={theme} type="submit">
          Save
        </Button>
        <Button
          theme={theme}
          color="secondary"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </StyledForm>
    </>
  );
}
