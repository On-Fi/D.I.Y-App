import React from "react";
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
    <ProjectTitle>{project.name}</ProjectTitle>
    <br />
    <OtherValuesContainer>
      <OtherValues>{project.time}</OtherValues>
      <OtherValues>{project.price}</OtherValues>
      <OtherValues>{project.category}</OtherValues>
      <OtherValues>{project.difficulty}</OtherValues>
    </OtherValuesContainer>
  </StyledCard>
);

export default Card;
