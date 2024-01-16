import styled from "styled-components";
import Card from "../Card";

export default function ProjectList({ projects }) {
  return (
    <StyledProjectList>
      {projects.map((project) => (
        <Card key={project._id} project={project} />
      ))}
    </StyledProjectList>
  );
}

const StyledProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 0;
  margin: 0;
`;
