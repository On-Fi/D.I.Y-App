import styled from "styled-components";
import { Comfortaa } from "next/font/google";
import themes from "@/components/Themes";

const comfortaa = Comfortaa({ subsets: ["latin"] });

const StyledButton = styled.button`
  border: none;
  padding: 10px;
  background-color: ${(props) => props.color === "primary" ? themes[props.theme].primaryButtonColor : themes[props.theme].secondaryButtonColor};
  border-radius: 20px;
  font-family: ${comfortaa.style.fontFamily};
  color: ${(props) => props.color === "primary" ? themes[props.theme].primaryButtonTextColor : themes[props.theme].secondaryButtonTextColor};
`;

export default function Button({ onClick, children, theme, color = "primary", }) {
  return (
    <StyledButton theme={theme} color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
