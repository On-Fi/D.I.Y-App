import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: #fada5e;
  padding: 3px;
  cursor: default;
`;

const Header = () => (
  <StyledHeader>
    <h1>DIY-APP</h1>
  </StyledHeader>
);

export default Header;
