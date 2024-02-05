import styled from "styled-components";
import { useState } from "react";
import { Image } from "cloudinary-react";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button";
import { Comfortaa } from "next/font/google";
import themes from "@/components/Themes";

const comfortaa = Comfortaa({ subsets: ["latin"] });

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
  margin: auto;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-bottom: 20px;
  &:focus {
    outline: 2px solid ${(props) => themes[props.theme].primaryButtonColor};
  }
`;

const StyledSelect = styled.select`
  padding: 10px;
  font-family: ${comfortaa.style.fontFamily};
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-bottom: 20px;
  &:focus {
    outline: 2px solid ${(props) => themes[props.theme].primaryButtonColor};
  }
`;

const UploadPreview = styled(Image)`
  width: 100px;
`;

const UploadSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

const StyledStep = styled.div`
  display: flex;
  gap: 10px;
`;

const MaterialInput = styled.div`
  display: flex;
`;

const UploadButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function Form({ onSubmit, onCancel, theme, color = "primary",  project = {} }) {
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

  function handleAddStep() {
    const lastStep = steps[steps.length - 1];
    if (!lastStep || lastStep.text.trim() !== "") {
      setSteps([...steps, { id: uuidv4(), text: "" }]);
    } else {
      alert("Please fill in the previous step first.");
    }
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

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="title">Title:*</label>
        <StyledInput theme={theme}
          type="text"
          id="title"
          name="title"
          defaultValue={project.title}
          required
        />

        <label htmlFor="image">Image:</label>
        <UploadSection>
          <UploadPreview
            src={imageId}
            width="300"
            crop="scale"
            alt="beispiel image"
          />
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

        <label htmlFor="category">Category:* </label>
        <StyledSelect theme={theme}
          defaultValue={project.category || ""}
          name="category"
          id="category"
          required
        >
          <option value="" disabled selected>
            choose here
          </option>
          <option value="home">home</option>
          <option value="garden">garden</option>
          <option value="fashion">fashion</option>
          <option value="kitchen">kitchen</option>
          <option value="bathroom">bathroom</option>
        </StyledSelect>

        <label htmlFor="difficulty">Difficulty:*</label>
        <StyledSelect theme={theme}
          defaultValue={project.difficulty || ""}
          name="difficulty"
          id="difficulty"
          required
        >
          <option value="" disabled hidden>
            choose here
          </option>
          <option value="beginner">beginner</option>
          <option value="advanced">advanced</option>
          <option value="expert">expert</option>
        </StyledSelect>

        <label htmlFor="time">Duration:* </label>
        <StyledInput theme={theme}
          type="range"
          id="time"
          name="time"
          min="0"
          max="48"
          defaultValue={project.time || 24}
        />

        <label htmlFor="price">Price:* </label>
        <StyledSelect theme={theme}
          defaultValue={project.priceCategory || ""}
          name="priceCategory"
          id="priceCategory"
          placeholder="choose here"
          required
        >
          <option value="" disabled hidden>
            choose here
          </option>
          <option value="€">0-10 €</option>
          <option value="€€">10-50 €</option>
          <option value="€€€">50-150 €</option>
        </StyledSelect>

        <label htmlFor="tools">Tools:*</label>
        {tools.map((tool) => (
          <StyledInput theme={theme}
            key={tool.id}
            id="tool"
            name="tool"
            defaultValue={tool.name}
            placeholder='e.g. "hammer"'
            onInput={(event) => handleToolInput(event.target.value, tool.id)}
            required
          ></StyledInput>
        ))}
        <Button theme={theme} color="secondary" type="button" onClick={handleAddTool}>
          add tool
        </Button>

        <label htmlFor="tools">Material:*</label>
        {material.map((item) => (
          <MaterialInput key={item.id}>
            <StyledInput theme={theme}
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
            <StyledInput theme={theme}
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
          </MaterialInput>
        ))}
        <Button theme={theme} color="secondary" type="button" onClick={handleAddMaterial}>
          add material
        </Button>

        <label htmlFor="instructions">Instructions:*</label>
        {steps.map((step, index) => (
          <StyledStep key={step.id}>
            <label>Step {index + 1} </label>
            <StyledInput theme={theme}
              id="instructions"
              name="instructions"
              defaultValue={step.text}
              onInput={(event) =>
                handleInstructionInput(event.target.value, step.id)
              }
              required
            ></StyledInput>
          </StyledStep>
        ))}
        <Button theme={theme} color="secondary" type="button" onClick={handleAddStep}>
          add step
        </Button>

        <Button theme={theme} type="submit">Save</Button>
        <Button theme={theme} color="secondary" type="button" onClick={onCancel}>
          Cancel
        </Button>
      </StyledForm>
    </>
  );
}
