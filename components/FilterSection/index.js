import styled from "styled-components";
import FilterCategory from "../FilterCategory";
import { useState } from "react";
import FilterIcon from "./FilterIcon";
import Button from "../Button";
import themes from "../Themes";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  width: 85%;
  margin: auto;
  padding: 10px;
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
  font-size: 15px;
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

const StyledInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 7px;
  background: ${(props) =>
    props.color === "primary"
      ? themes[props.theme].secondaryButtonColor
      : themes[props.theme].primaryButtonColor};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: ${(props) =>
      props.color === "primary"
        ? themes[props.theme].primaryButtonColor
        : themes[props.theme].secondaryButtonColor};
  }
`;

export default function FilterSection({
  onResetFilter,
  filters,
  handleFilter,
  theme,
}) {
  function onFilter(event) {
    handleFilter(event.target.value, event.target.name);
  }
  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleExpandFilter() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div theme={theme}>
      <FilterButton onClick={handleExpandFilter}>
        <FilterIcon />
      </FilterButton>
      {!isCollapsed && (
        <StyledForm>
          <StyledFilterCategorySection>
            <StyledFilterCategory>
              <FilterCategory
                theme={theme}
                category={"priceCategory"}
                names={["€", "€€", "€€€"]}
                onChange={onFilter}
                selectedValue={filters.priceCategory}
              ></FilterCategory>
            </StyledFilterCategory>

            <StyledFilterCategory>
              <FilterCategory
                theme={theme}
                category={"difficulty"}
                names={["beginner", "advanced", "expert"]}
                onChange={onFilter}
                selectedValue={filters.difficulty}
              ></FilterCategory>
            </StyledFilterCategory>

            <StyledFilterCategory>
              <FilterCategory
                theme={theme}
                category={"category"}
                names={["home", "garden", "fashion", "kitchen", "bathroom"]}
                onChange={onFilter}
                selectedValue={filters.category}
              ></FilterCategory>
            </StyledFilterCategory>
          </StyledFilterCategorySection>
          <label htmlFor="time">Duration: {filters.time} hours</label>
          <StyledInput
            theme={theme}
            color="primary"
            type="range"
            id="time"
            name="time"
            min="1"
            max="48"
            value={filters.time || 24}
            onChange={onFilter}
          />
          <StyledRangeInput>
            <span>1</span>
            <span>24</span>
            <span>48</span>
          </StyledRangeInput>
          <Button
            theme={theme}
            color="primary"
            type="button"
            onClick={onResetFilter}
          >
            Reset filter
          </Button>
        </StyledForm>
      )}
    </div>
  );
}
