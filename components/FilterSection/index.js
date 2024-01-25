import styled from "styled-components";
import FilterCategory from "../FilterCategory";
import { useState } from "react";

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
export default function FilterSection({
  handleTimeFilter,
  handleDifficultyFilter,
  handlePriceCategoryFilter,
  handleCategoryFilter,
}) {
  const [time, setTime] = useState(8);

  function onTimeFilter(event) {
    handleTimeFilter(event.target.value);
    setTime(event.target.value);
  }

  function onDifficultyFilter(event) {
    handleDifficultyFilter(event.target.value);
  }

  function onPriceCategoryFilter(event) {
    handlePriceCategoryFilter(event.target.value);
  }

  function onCategoryFilter(event) {
    handleCategoryFilter(event.target.value);
  }

  return (
    <StyledForm>
      <StyledFilterCategorySection>
        <StyledFilterCategory>
          <FilterCategory
            category={"priceCategory"}
            names={["€", "€€", "€€€"]}
            onChangeFunction={onPriceCategoryFilter}
          ></FilterCategory>
        </StyledFilterCategory>

        <StyledFilterCategory>
          <FilterCategory
            category={"difficulty"}
            names={["beginner", "advanced", "expert"]}
            onChangeFunction={onDifficultyFilter}
          ></FilterCategory>
        </StyledFilterCategory>

        <StyledFilterCategory>
          <FilterCategory
            category={"category"}
            names={["home", "garden", "fashion", "kitchen", "bathroom"]}
            onChangeFunction={onCategoryFilter}
          ></FilterCategory>
        </StyledFilterCategory>
      </StyledFilterCategorySection>
      <label htmlFor="time">Duration: {time} hours</label>
      <input
        type="range"
        id="time"
        name="time"
        min="1"
        max="48"
        onChange={onTimeFilter}
      />
      <StyledRangeInput>
        <span>1 hour</span>
        <span>24 hours</span>
        <span>48 hours</span>
      </StyledRangeInput>
    </StyledForm>
  );
}
