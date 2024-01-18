import styled from "styled-components";
import FilterInput from "../FilterInput";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  width: 85%;
  margin: auto;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const StyledSubheading = styled.p`
  text-align: center;
  font-weight: 600;
  margin: 0;
`;
const StyledFilterCategorySection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;
const StyledFilterCategory = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledRangeInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export default function FilterSection({ handleFilter }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filterData = Object.fromEntries(formData);
    handleFilter(filterData);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledSubheading>
        Please choose a filter for each category
      </StyledSubheading>
      <StyledFilterCategorySection>
        <StyledFilterCategory>
          <label htmlFor="cheap">
            <input
              type="radio"
              id="cheap"
              name="priceCategory"
              value="€"
              required
              onInvalid={(event) =>
                event.target.setCustomValidity("Please select a price category")
              }
              onChange={(event) => event.target.setCustomValidity("")}
            ></input>
            €
          </label>

          <label htmlFor="medium">
            <input
              type="radio"
              id="medium"
              name="priceCategory"
              value="€€"
              required
            ></input>
            €€
          </label>

          <label htmlFor="expensive">
            <input
              type="radio"
              id="expensive"
              name="priceCategory"
              value="€€€"
              required
            ></input>
            €€€
          </label>
        </StyledFilterCategory>
        <StyledFilterCategory>
          <label htmlFor="beginner">
            <input
              type="radio"
              id="beginner"
              name="difficulty"
              value="beginner"
              required
              onInvalid={(event) =>
                event.target.setCustomValidity(
                  "Please select a difficulty level"
                )
              }
              onChange={(event) => event.target.setCustomValidity("")}
            ></input>
            beginner
          </label>

          <label htmlFor="advanced">
            <input
              type="radio"
              id="advanced"
              name="difficulty"
              value="advanced"
              required
            ></input>
            advanced
          </label>

          <label htmlFor="expert">
            <input
              type="radio"
              id="expert"
              name="difficulty"
              value="expert"
              required
            ></input>
            expert
          </label>
        </StyledFilterCategory>
        <StyledFilterCategory>
          <label htmlFor="home">
            <input
              type="radio"
              id="home"
              name="category"
              value="home"
              required
              onInvalid={(event) =>
                event.target.setCustomValidity("Please select a category")
              }
              onChange={(event) => event.target.setCustomValidity("")}
            ></input>
            Home
          </label>

          <label htmlFor="garden">
            <input
              type="radio"
              id="garden"
              name="category"
              value="garden"
              required
            ></input>
            Garden
          </label>

          <label htmlFor="fashion">
            <input
              type="radio"
              id="fashion"
              name="category"
              value="fashion"
              required
            ></input>
            Fashion
          </label>
          <label htmlFor="kitchen">
            <input
              type="radio"
              id="kitchen"
              name="category"
              value="kitchen"
              required
            ></input>
            Kitchen
          </label>
          <label htmlFor="bathroom">
            <input
              type="radio"
              id="bathroom"
              name="category"
              value="bathroom"
              required
            ></input>
            Bathroom
          </label>
        </StyledFilterCategory>
      </StyledFilterCategorySection>
      <label htmlFor="time">Duration: </label>

      <input type="range" id="time" name="time" min="1" max="48" />
      <StyledRangeInput>
        <span>1 hour</span>
        <span>24 hours</span>
        <span>48 hours</span>
      </StyledRangeInput>
      <button type="submit">Apply filter</button>
      <button type="button">Reset</button>
    </StyledForm>
  );
}
