import styled from "styled-components";
import { useRouter } from "next/router";

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

export default function Form({ handleDings }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const projectData = Object.fromEntries(formData);
    handleDings(projectData);
  }

  // const router = useRouter();

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const projectData = Object.fromEntries(formData);

  //   const response = await fetch("/api/projects", {
  //     method: "POST",
  //     body: JSON.stringify(projectData),
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   if (response.ok) {
  //     router.push("/");
  //   }
  // }
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <StyledInput type="text" id="title" name="title"></StyledInput>

        <label htmlFor="category">Category: </label>
        <StyledSelect name="category" id="category" defaultValue="choose-here">
          <option value="home">home</option>
          <option value="garden">garden</option>
          <option value="fashion">fashion</option>
          <option value="kitchen">kitchen</option>
          <option value="bathroom">bathroom</option>
          <option value="choose-here" disabled hidden>
            Choose here
          </option>
        </StyledSelect>

        <label htmlFor="difficulty">difficulty :</label>
        <StyledSelect
          name="difficulty"
          id="difficulty"
          defaultValue="choose-here"
        >
          <option value="beginner">beginner</option>
          <option value="advanced">advanced</option>
          <option value="expert">expert</option>

          <option value="choose-here" disabled hidden>
            Choose here
          </option>
        </StyledSelect>

        <label htmlFor="time">duration: </label>
        <StyledInput type="range" id="time" name="time" min="0" max="48" />

        <label htmlFor="price">Price: </label>
        <StyledSelect
          name="priceCategory"
          id="priceCategory"
          defaultValue="choose-here"
        >
          <option value="€">0-10 €</option>
          <option value="€€">10-50 €</option>
          <option value="€€€">50-150 €</option>

          <option value="choose-here" disabled hidden>
            Choose here
          </option>
        </StyledSelect>

        <label htmlFor="tools">tools: </label>
        <StyledInput id="tools" name="tools"></StyledInput>

        <label htmlFor="material">materials: </label>
        <StyledInput id="material" name="material"></StyledInput>

        <label htmlFor="instructions">instructions: </label>
        <StyledInput id="instructions" name="instructions"></StyledInput>

        <button type="submit">save</button>
        <button type="button" onClick={() => router.push("/")}>
          Cancel
        </button>
      </StyledForm>
    </>
  );
}
