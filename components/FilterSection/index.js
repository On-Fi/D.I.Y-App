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
  onResetFilter,
}) {
  const [time, setTime] = useState(24);
  const [priceCategory, setPriceCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null); 
  const [category, setCategory] = useState(null); 

  function onTimeFilter(event) {
    handleTimeFilter(event.target.value);
    setTime(event.target.value);
  }

  function onDifficultyFilter(event) {
    handleDifficultyFilter(event.target.value);
    setDifficulty(event.target.value);
  }

  function onPriceCategoryFilter(event) {
    handlePriceCategoryFilter(event.target.value);
    setPriceCategory(event.target.value);
  }

  function onCategoryFilter(event) {
    handleCategoryFilter(event.target.value);
    setCategory(event.target.value);
  }

  function handleResetFilter() {
    onResetFilter();
    setTime(24); 
    setPriceCategory(null); 
    setPriceCategory(null); 
    setDifficulty(null); 
    setCategory(null);
  }

  return (
    <StyledForm>
      <StyledFilterCategorySection>
        <StyledFilterCategory>
          <FilterCategory
            category={"priceCategory"}
            names={["€", "€€", "€€€"]}
            onChangeFunction={onPriceCategoryFilter}
            selectedValue={priceCategory} 
          ></FilterCategory>
        </StyledFilterCategory>

        <StyledFilterCategory>
          <FilterCategory
            category={"difficulty"}
            names={["beginner", "advanced", "expert"]}
            onChangeFunction={onDifficultyFilter}
            selectedValue={difficulty}
          ></FilterCategory>
        </StyledFilterCategory>

        <StyledFilterCategory>
          <FilterCategory
            category={"category"}
            names={["home", "garden", "fashion", "kitchen", "bathroom"]}
            onChangeFunction={onCategoryFilter}
            selectedValue={category}
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
        value={time}
        onChange={onTimeFilter}
      />
      <StyledRangeInput>
        <span>1 hour</span>
        <span>24 hours</span>
        <span>48 hours</span>
      </StyledRangeInput>
      <button type="button" onClick={handleResetFilter}>
        Reset filter
      </button>
    </StyledForm>
  );
}
