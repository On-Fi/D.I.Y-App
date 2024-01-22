import styled from "styled-components";
import { useState } from "react";
import { Image } from "cloudinary-react"; // npm install cloudinary

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

export default function Form({ onSubmit, onCancel, project = {} }) {
  const [imageSelected, setImageSelected] = useState("");
  const [imageId, setImageId] = useState(project.image || "sample"); // Hier kommt die publicId des Bildes rein, welches du als Vorschau anzeigen möchtest (sample ist hier ein Beispiel)

  const uploadImage = async () => {
    // Erstellen eines neuen FormData-Objekts
    const formData = new FormData();
    // Die ausgewählte Bilddatei wird zum FormData Objekt hinzugefügt
    formData.append("file", imageSelected);
    // Das ausgewählte upload-preset wird zum FormData Objekt hinzugefügt (upload- preset istwas wie eine databse in MongDB)
    formData.append("upload_preset", "diy-app"); // Hier kommt dein upload-preset rein "diy-app" ist hier mein upload-preset
    try {
      // Senden einer POST-Request an Cloudinary zum Hochladen des Bildes
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dzxsogtiq/image/upload`, // Hier kommt dein CloudName rein (https://api.cloudinary.com/v1_1/deinCloudName/image/upload)
        {
          method: "POST", // Hier wird die Methode festgelegt
          body: formData, // Hier wird das FormData-Objekt übergeben
        }
      );
      // Hier wird die Antwort in ein JSON-Objekt umgewandelt
      const image = await res.json();
      // Das Set der publicId des hochgeladenen Bildes
      setImageId(
        `https://res.cloudinary.com/dzxsogtiq/image/upload/v1705938209/${image.public_id}.png`
      );
      // Hier wird die publicId des hochgeladenen Bildes "gesetet"
    } catch (error) {
      // Ausgabe von ein Fehler, wenn etwas schief geht
      console.error(
        "UPS! Etwas ist schief gelaufen. Bitte versuche es erneut."
      );
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const projectData = Object.fromEntries(formData);
    console.log("erst:", projectData);
    projectData.image = imageId;
    console.log("dann:", projectData);
    console.log(imageId);
    onSubmit(projectData);
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <StyledInput
          type="text"
          id="title"
          name="title"
          defaultValue={project.title}
        />
        <Image src={imageId} width="300" crop="scale" alt="beispiel image" />

        <input
          type="file"
          name="image"
          title="image"
          onChange={(event) => setImageSelected(event.target.files[0])}
        />
        <button onClick={uploadImage}>Upload an Image</button>

        <label htmlFor="category">Category: </label>
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
        <label htmlFor="difficulty">Difficulty:</label>
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
        <label htmlFor="time">Duration: </label>
        <StyledInput
          type="range"
          id="time"
          name="time"
          min="0"
          max="48"
          defaultValue={project.time || 24}
        />
        <label htmlFor="price">Price: </label>
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
        <label htmlFor="tools">Tools:</label>
        <StyledInput id="tools" name="tools" defaultValue={project.tools} />
        <label htmlFor="material">Material:</label>
        <StyledInput
          id="material"
          name="material"
          defaultValue={project.material}
        />
        <label htmlFor="instructions">Instructions:</label>
        <StyledInput
          id="instructions"
          name="instructions"
          defaultValue={project.instructions}
        />
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
