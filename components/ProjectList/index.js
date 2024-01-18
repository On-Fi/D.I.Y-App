import styled from "styled-components";
import Card from "../Card";

const StyledProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export default function ProjectList({
  projectsToDisplay,
  favorites,
  onToggleFavorite,
}) {
  return (
    <StyledProjectList>
      {projectsToDisplay.map((project) => (
        <Card
          key={project._id}
          project={project}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </StyledProjectList>
  );
}
