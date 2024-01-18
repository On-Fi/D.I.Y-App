import styled from "styled-components";

const StyledFilterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

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

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
      <StyledDiv>
        <StyledFilterSection>
          <label htmlFor="all">
            <input
              type="radio"
              id="all"
              name="priceCategory"
              value="all"
            ></input>
            all
          </label>
          <label htmlFor="cheap">
            <input
              type="radio"
              id="cheap"
              name="priceCategory"
              value="cheap"
            ></input>
            €
          </label>

          <label htmlFor="medium">
            <input
              type="radio"
              id="medium"
              name="priceCategory"
              value="medium"
            ></input>
            €€
          </label>

          <label htmlFor="expensive">
            <input
              type="radio"
              id="expensive"
              name="priceCategory"
              value="expensive"
            ></input>
            €€€
          </label>
        </StyledFilterSection>
        <StyledFilterSection>
          <label htmlFor="all">
            <input type="radio" id="all" name="difficulty" value="all"></input>
            all
          </label>
          <label htmlFor="easy">
            <input
              type="radio"
              id="beginner"
              name="difficulty"
              value="beginner"
            ></input>
            beginner
          </label>

          <label htmlFor="advanced">
            <input
              type="radio"
              id="advanced"
              name="difficulty"
              value="advanced"
            ></input>
            advanced
          </label>

          <label htmlFor="expert">
            <input
              type="radio"
              id="expert"
              name="difficulty"
              value="expert"
            ></input>
            expert
          </label>
        </StyledFilterSection>
        <StyledFilterSection>
          <label htmlFor="living">
            <input
              type="radio"
              id="living"
              name="category"
              value="living"
            ></input>
            Living
          </label>

          <label htmlFor="garden">
            <input
              type="radio"
              id="garden"
              name="category"
              value="garden"
            ></input>
            Garden
          </label>

          <label htmlFor="fashion">
            <input
              type="radio"
              id="fashion"
              name="category"
              value="fashion"
            ></input>
            Fashion
          </label>
        </StyledFilterSection>
      </StyledDiv>
      <label htmlFor="time">Duration: </label>
      <input type="range" id="time" name="time" min="0" max="48" />
      <button type="submit">Apply filter</button>
    </StyledForm>
  );
}
