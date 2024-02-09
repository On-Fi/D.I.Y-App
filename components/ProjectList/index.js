import styled from "styled-components";
import Card from "../Card";

const StyledProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 0;
  margin: 0;
  margin-top: 20px;

  @media (min-width: 1200px) {
    width: 90%;
    margin: auto;
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: start;
    grid-column-gap: 0px;
    grid-row-gap: 50px;
  }
`;

export default function ProjectList({
  projectsToDisplay,
  favorites,
  onToggleFavorite,
  theme,
}) {
  return (
    <StyledProjectList theme={theme}>
      {projectsToDisplay.map((project) => (
        <Card
          theme={theme}
          key={project._id}
          project={project}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
          isWhite={true}
        />
      ))}
    </StyledProjectList>
  );
}
