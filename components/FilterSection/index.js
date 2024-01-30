import styled from "styled-components";
import FilterCategory from "../FilterCategory";
import { useState } from "react";
import FilterIcon from "./FilterIcon";
import Button from "../Button";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color:  #f5f5f5;
  width: 85%;
  margin: auto;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const FilterButton = styled.button`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;
  border-radius: 10px;
  align-items: center;
  border: none;
  background-color: #f5f5f5;
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
  onResetFilter,
  filters,
  handleFilter,
}) {
  function onFilter(event) {
    handleFilter(event.target.value, event.target.name);
  }
  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleExpandFilter() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <>
    <FilterButton onClick={handleExpandFilter}>
        <FilterIcon />
      </FilterButton>
      { !isCollapsed && <StyledForm> 
      <StyledFilterCategorySection>
        <StyledFilterCategory>
          <FilterCategory
            category={"priceCategory"}
            names={["€", "€€", "€€€"]}
            onChange={onFilter}
            selectedValue={filters.priceCategory}
          ></FilterCategory>
        </StyledFilterCategory>

        <StyledFilterCategory>
          <FilterCategory
            category={"difficulty"}
            names={["beginner", "advanced", "expert"]}
            onChange={onFilter}
            selectedValue={filters.difficulty}
          ></FilterCategory>
        </StyledFilterCategory>

        <StyledFilterCategory>
          <FilterCategory
            category={"category"}
            names={["home", "garden", "fashion", "kitchen", "bathroom"]}
            onChange={onFilter}
            selectedValue={filters.category}
          ></FilterCategory>
        </StyledFilterCategory>
      </StyledFilterCategorySection>
      <label htmlFor="time">Duration: {filters.time} hours</label>
      <input
        type="range"
        id="time"
        name="time"
        min="1"
        max="48"
        value={filters.time || 24}
        onChange={onFilter}
      />
      <StyledRangeInput>
        <span>1 hour</span>
        <span>24 hours</span>
        <span>48 hours</span>
      </StyledRangeInput>
      <Button type="button" onClick={onResetFilter}>
        Reset filter
      </Button>
    </StyledForm> }
    </>
  );
}
