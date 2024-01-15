import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  cursor: pointer;
`;

const ProjectTitle = styled.h3`
  margin: 0;
`;

const OtherValuesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;
`;

const OtherValues = styled.p`
  margin: 0;
  margin-right: 10px;
`;

const Card = ({ project }) => (
  <StyledCard>
    <ProjectTitle>{project.title}</ProjectTitle>
    <ProjectValuesContainer>
      <ProjectValues>{project.time} hours</ProjectValues>
      <ProjectValues>{project.priceCategory}</ProjectValues>
      <ProjectValues>{project.category}</ProjectValues>
      <ProjectValues>{project.difficulty}</ProjectValues>
    </ProjectValuesContainer>
  </StyledCard>
);

export default Card;
