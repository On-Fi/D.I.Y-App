import styled from "styled-components";
import Link from "next/link";
import ShortFactsBox from "../ShortFactsBox";

const StyledCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  width: 85%;
  margin: auto;
`;

const ProjectTitle = styled.h3`
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Card = ({ project }) => (
  <StyledCard>
    <StyledLink key={project._id} href={`projects/${project._id}`}>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ShortFactsBox project={project}></ShortFactsBox>
    </StyledLink>
  </StyledCard>
);

export default Card;
