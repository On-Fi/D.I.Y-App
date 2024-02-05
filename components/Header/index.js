import styled from "styled-components";
import AppLogo from "./AppLogo";
import themes from "../Themes";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column; 
  align-items: center;
  font-weight: 200;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: ${(props) => themes[props.theme].headerBackgroundColor};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 3px;
  padding-top: 0px;
`;

const StyledAppName = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 200;
`;  

const Header = ({ theme }) => (
  <StyledHeader theme={theme}>
    <AppLogo theme={theme} />
    <StyledAppName >woodworm</StyledAppName >
  </StyledHeader>
);

export default Header;
