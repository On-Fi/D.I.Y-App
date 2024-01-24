import styled from "styled-components";
import { useState } from "react";
import { Image } from "cloudinary-react";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
  margin: auto;
`;

const StyledInput = styled.input`
  border: 1px solid lightgrey;
  border-radius: 15px;
`;

const StyledSelect = styled.select`
  border: 1px solid lightgrey;
  border-radius: 15px;
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

export default function Form({ onSubmit, onCancel, project = {} }) {
  const [imageSelected, setImageSelected] = useState("");
  const [imageId, setImageId] = useState(project.image || "/sample-image.png");
  const [steps, setSteps] = useState([""]);
  console.log(steps);
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
    console.log(projectData);
    onSubmit(projectData);
  }

  function handleAddStep() {
    setSteps([...steps, ""]);
  }

  function handleInput(event, index) {
    console.log(event);
    console.log(index);
    setSteps(steps.map((step, i) => (i === index ? event : step)));
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="title">Title:*</label>
        <StyledInput
          type="text"
          id="title"
          name="title"
          defaultValue={project.title}
        />

        <label htmlFor="image">Image:</label>
        <UploadSection>
          <UploadPreview
            src={imageId}
            width="300"
            crop="scale"
            alt="beispiel image"
          />
          <div>
            <input
              type="file"
              name="image"
              title="image"
              onChange={(event) => setImageSelected(event.target.files[0])}
            />
            <button type="button" onClick={uploadImage}>
              Upload an Image
            </button>
          </div>
        </UploadSection>

        <label htmlFor="category">Category:* </label>
        <StyledSelect
          defaultValue={project.category || "choose-here"}
          name="category"
          id="category"
        >
          <option value="choose-here" disabled hidden>
            choose here
          </option>
          <option value="home">home</option>
          <option value="garden">garden</option>
          <option value="fashion">fashion</option>
          <option value="kitchen">kitchen</option>
          <option value="bathroom">bathroom</option>
        </StyledSelect>
        <label htmlFor="difficulty">Difficulty:*</label>
        <StyledSelect
          defaultValue={project.difficulty || "choose-here"}
          name="difficulty"
          id="difficulty"
        >
          <option value="beginner">beginner</option>
          <option value="advanced">advanced</option>
          <option value="expert">expert</option>

          <option value="choose-here" disabled hidden>
            choose here
          </option>
        </StyledSelect>
        <label htmlFor="time">Duration:* </label>
        <StyledInput
          type="range"
          id="time"
          name="time"
          min="0"
          max="48"
          defaultValue={project.time || 24}
        />
        <label htmlFor="price">Price:* </label>
        <StyledSelect
          defaultValue={project.priceCategory || "choose-here"}
          name="priceCategory"
          id="priceCategory"
        >
          <option value="€">0-10 €</option>
          <option value="€€">10-50 €</option>
          <option value="€€€">50-150 €</option>

          <option value="choose-here" disabled hidden>
            choose here
          </option>
        </StyledSelect>
        <label htmlFor="tools">Tools:*</label>
        <StyledInput id="tools" name="tools" defaultValue={project.tools} />
        <label htmlFor="material">Material:</label>
        <StyledInput
          id="material"
          name="material"
          defaultValue={project.material}
        />
        <label htmlFor="instructions">Instructions:*</label>
        {/* <StyledInput
          id="instructions"
          name="instructions"
          defaultValue={project.instructions}
        /> */}
        {steps.map((step, index) => (
          <StyledInput
            key={index}
            id="instructions"
            name="instructions"
            defaultValue={step}
            onInput={(event) => handleInput(event.target.value, index)}
          ></StyledInput>
        ))}
        <button type="button" onClick={handleAddStep}>
          add step
        </button>
        <button type="submit">
          {Object.keys(project).length === 0 ? "Save" : "Edit"}
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </StyledForm>
    </>
  );
}
