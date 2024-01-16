import styled from "styled-components";

const StyleWrapper = styled.div`
  margin-bottom: 30px;
`;

export default function Wrapper({ children }) {
  return <StyleWrapper>{children}</StyleWrapper>;
}
