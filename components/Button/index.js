import styled from "styled-components";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ subsets: ["latin"] });

const StyledButton = styled.button`
  border: none;
  padding: 10px;
  background-color: ${(props) =>
    props.color === "primary" ? "#F9C858" : "#d5d5d5"};
  border-radius: 20px;
  font-family: ${comfortaa.style.fontFamily};
`;

export default function Button({ onClick, children, color = "primary" }) {
  return (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
