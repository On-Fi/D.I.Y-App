import styled from "styled-components";
const RadioInput = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #F9C858;
  border-radius: 50%;
  margin-right: 5px;
  outline: none; 
  &:checked {
    background-color: #F9C858;
  }
`;
export default function FilterCategory({
  category,
  names,
  onChange,
  selectedValue,
}) {
  return (
    <>
      {names.map((name) => (
        <label key={name} htmlFor={name}>
          <RadioInput
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
