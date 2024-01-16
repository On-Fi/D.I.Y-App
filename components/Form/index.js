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

export default function Form() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const projectData = Object.fromEntries(formData);

    const response = await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify(projectData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      router.push("/");
    }
  }
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <StyledInput type="text" id="title" name="title"></StyledInput>

        <label htmlfor="category">Category: </label>
        <StyledSelect name="category" id="category">
          <option value="living">Living</option>
          <option value="garden">Garden</option>
          <option value="fashion">Fashion</option>
          <option value="kitchen">Kitchen</option>
          <option value="bathroom">Bathroom</option>
          <option value="" selected disabled hidden>
            Choose here
          </option>
        </StyledSelect>

        <label htmlfor="difficulty">Difficulty :</label>
        <StyledSelect name="difficulty" id="difficulty">
          <option value="beginner">Beginner</option>
          <option value="advanced">Advanced</option>
          <option value="expert">Expert</option>

          <option value="" selected disabled hidden>
            Choose here
          </option>
        </StyledSelect>

        <label htmlfor="time">Duration: </label>
        <StyledInput type="range" id="time" name="time" min="0" max="48" />

        <label htmlfor="price">Price: </label>
        <StyledSelect name="priceCategory" id="priceCategory">
          <option value="cheap">0-10 €</option>
          <option value="medium">10-50 €</option>
          <option value="expensive">50-150 €</option>

          <option value="" selected disabled hidden>
            Choose here
          </option>
        </StyledSelect>

        <label htmlfor="tools">Tools: </label>
        <StyledInput id="tools" name="tools"></StyledInput>

        <label htmlfor="material">Materials: </label>
        <StyledInput id="material" name="material"></StyledInput>

        <label htmlfor="instructions">Instructions: </label>
        <StyledInput id="instructions" name="instructions"></StyledInput>

        <button type="submit">Save</button>
        <button type="button" onClick={() => router.push("/")}>
          Cancel
        </button>
      </StyledForm>
    </>
  );
}
