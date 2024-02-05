import styled from "styled-components";

const StyledBox = styled.div`
  background-color: #e8e8e8; 
  border-radius: 20px;
  padding: 20px;
  margin: 10px;
`;

const SectionTitles = styled.h2`
 margin-top: 0;
  font-size: 1.2rem;
`;

export default function ProjectInfoBox({ title, text, children, theme  }) {
  return (
    <StyledBox theme={theme}>
      <SectionTitles>{title} :</SectionTitles>
      <p>{text}</p>
      {children}
    </StyledBox>
  );
}
