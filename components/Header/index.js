import styled from "styled-components";
import AppLogo from "./AppLogo";
import themes from "../Themes";
import Link from "next/link";

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

const HeadLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const Header = ({ theme }) => (
  <HeadLink theme={theme} href="/">
    <StyledHeader theme={theme}>
      <AppLogo theme={theme} />
      <StyledAppName>woodworm</StyledAppName>
    </StyledHeader>
  </HeadLink>
);

export default Header;
