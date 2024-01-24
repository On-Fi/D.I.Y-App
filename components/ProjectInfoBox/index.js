import styled from "styled-components";

const StyledBox = styled.div`
  background-color: #e8e8e8;
  border-radius: 20px;
  padding: 5px;
  margin: 10px;
`;

export default function ProjectInfoBox({ title, text, children }) {
  return (
    <StyledBox>
      <h2>{title}:</h2>
      <p>{text}</p>
      {children}
    </StyledBox>
  );
}
