import styled from "styled-components";
import themes from "@/components/Themes";

const RadioInput = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid ${(props) => themes[props.theme].primaryButtonColor};
  border-radius: 50%;
  margin-right: 5px;
  outline: none; 
  &:checked {
    background-color: ${(props) => themes[props.theme].primaryButtonColor};
  }
`;
export default function FilterCategory({
  category,
  names,
  onChange,
  selectedValue,
  theme
}) {
  return (
    <>
      {names.map((name) => (
        <label key={name} htmlFor={name}>
          <RadioInput theme={theme}
            type="radio"
            id={name}
            name={category}
            value={name}
            required
            onChange={onChange}
            checked={selectedValue === name}
          />
          {name}
        </label>
      ))}
    </>
  );
}
