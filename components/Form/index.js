import styled from "styled-components";

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

export default function Form({ onSubmit, project = {} }) {
  console.log(project.category);
  console.log(Object.keys(project).length);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const projectData = Object.fromEntries(formData);
    onSubmit(projectData);
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <StyledInput
          type="text"
          id="title"
          name="title"
          defaultValue={project.title}
        ></StyledInput>

        {/* <label htmlFor="category">Category: </label>
        <StyledSelect
          defaultValue={
            Object.keys(project).length === 0 ? "choose-here" : project.category
          }
          name="category"
          id="category"
        >
          <option value="choose-here" disabled hidden>
            Choose here
          </option>
          <option value="home">home</option>
          <option value="garden">garden</option>
          <option value="fashion">fashion</option>
          <option value="kitchen">kitchen</option>
          <option value="bathroom">bathroom</option>
        </StyledSelect> */}

        <label htmlFor="category">Category: </label>
        <StyledSelect
          defaultValue={project.category}
          name="category"
          id="category"
        >
          <option value="choose-here" disabled hidden>
            Choose here
          </option>
          <option value="home">home</option>
          <option value="garden">garden</option>
          <option value="fashion">fashion</option>
          <option value="kitchen">kitchen</option>
          <option value="bathroom">bathroom</option>
        </StyledSelect>

        <label htmlFor="difficulty">difficulty :</label>
        <StyledSelect
          defaultValue={
            Object.keys(project).length === 0
              ? "choose-here"
              : project.difficulty
          }
          name="difficulty"
          id="difficulty"
        >
          <option value="beginner">beginner</option>
          <option value="advanced">advanced</option>
          <option value="expert">expert</option>

          <option value="choose-here" disabled hidden>
            Choose here
          </option>
        </StyledSelect>

        <label htmlFor="time">duration: </label>
        <StyledInput
          type="range"
          id="time"
          name="time"
          min="0"
          max="48"
          defaultValue={project.time}
        />

        <label htmlFor="price">Price: </label>
        <StyledSelect
          defaultValue={
            Object.keys(project).length === 0
              ? "choose-here"
              : project.priceCategory
          }
          name="priceCategory"
          id="priceCategory"
        >
          <option value="€">0-10 €</option>
          <option value="€€">10-50 €</option>
          <option value="€€€">50-150 €</option>

          <option value="choose-here" disabled hidden>
            Choose here
          </option>
        </StyledSelect>

        <label htmlFor="tools">tools: </label>
        <StyledInput
          id="tools"
          name="tools"
          defaultValue={project.tools}
        ></StyledInput>

        <label htmlFor="material">materials: </label>
        <StyledInput
          id="material"
          name="material"
          defaultValue={project.material}
        ></StyledInput>

        <label htmlFor="instructions">instructions: </label>
        <StyledInput
          id="instructions"
          name="instructions"
          defaultValue={project.instructions}
        ></StyledInput>

        <button type="submit">save</button>
        <button type="button" onClick={() => router.push("/")}>
          Cancel
        </button>
      </StyledForm>
    </>
  );
}

// import styled from "styled-components";
// import { useState } from "react"; // Import useState for the range input
// import { useRouter } from "next/router";

// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   width: 80%;
//   margin: auto;
// `;

// const StyledInput = styled.input`
//   border: 1px solid lightgrey;
//   border-radius: 15px;
// `;

// const StyledSelect = styled.select`
//   border: 1px solid lightgrey;
//   border-radius: 15px;
// `;

// export default function Form({ onSubmit, project = {} }) {
//   const router = useRouter();
//   const [timeValue, setTimeValue] = useState(project.time || 0); // Use state for the range input

//   async function handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const projectData = Object.fromEntries(formData);
//     onSubmit(projectData);
//   }

//   return (
//     <>
//       <StyledForm onSubmit={handleSubmit}>
//         <label htmlFor="title">Title: </label>
//         <StyledInput
//           type="text"
//           id="title"
//           name="title"
//           defaultValue={project.title}
//         ></StyledInput>
//         <label htmlFor="category">Category: </label>
//         <StyledSelect
//           value={
//             Object.keys(project).length === 0 ? "choose-here" : project.category
//           }
//           name="category"
//           id="category"
//         >
//           <option value="choose-here" disabled hidden>
//             Choose here
//           </option>
//           <option value="home">home</option>
//           <option value="garden">garden</option>
//           <option value="fashion">fashion</option>
//           <option value="kitchen">kitchen</option>
//           <option value="bathroom">bathroom</option>
//         </StyledSelect>
//         <label htmlFor="difficulty">Difficulty :</label>
//         <StyledSelect
//           name="difficulty"
//           id="difficulty"
//           defaultValue={project.difficulty}
//         >
//           <option value="beginner">beginner</option>
//           <option value="advanced">advanced</option>
//           <option value="expert">expert</option>

//           <option value="choose-here" disabled hidden>
//             Choose here
//           </option>
//         </StyledSelect>
//         <label htmlFor="time">Duration: </label>
//         <StyledInput
//           type="range"
//           id="time"
//           name="time"
//           min="0"
//           max="48"
//           value={timeValue}
//           onChange={(e) => setTimeValue(e.target.value)}
//         />
//         <span>{timeValue} hours</span> {/* Display the current value */}
//         <label htmlFor="price">Price: </label>
//         <StyledSelect
//           name="priceCategory"
//           id="priceCategory"
//           defaultValue={project.priceCategory}
//         >
//           <option value="€">0-10 €</option>
//           <option value="€€">10-50 €</option>
//           <option value="€€€">50-150 €</option>

//           <option value="choose-here" disabled hidden>
//             Choose here
//           </option>
//         </StyledSelect>
//         <label htmlFor="tools">Tools: </label>
//         <StyledInput
//           id="tools"
//           name="tools"
//           defaultValue={project.tools}
//         ></StyledInput>
//         <label htmlFor="material">Materials: </label>
//         <StyledInput
//           id="material"
//           name="material"
//           defaultValue={project.material}
//         ></StyledInput>
//         <label htmlFor="instructions">Instructions: </label>
//         <StyledInput
//           id="instructions"
//           name="instructions"
//           defaultValue={project.instructions}
//         ></StyledInput>
//         <button type="submit">Save</button>
//         <button type="button" onClick={() => router.push("/")}>
//           Cancel
//         </button>
//       </StyledForm>
//     </>
//   );
// }
