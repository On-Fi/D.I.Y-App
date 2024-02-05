import NavigationBar from "../NavigationBar";
import Header from "../Header";
import styled from "styled-components";

const StyleWrapper = styled.div`
  margin-bottom: 40px;
`;

export default function Layout({ children, theme, changeTheme}) {
  return (
    <>
    <Header theme={theme} />
   <StyleWrapper>{children}</StyleWrapper>
   <NavigationBar theme={theme} changeTheme={changeTheme} />
    </>
  );
}
