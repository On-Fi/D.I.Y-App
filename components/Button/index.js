import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 10px;
  background-color: #f9c858;
  border-radius: 20px;
`;

export default function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}