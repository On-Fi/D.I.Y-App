import styled from "styled-components";
import ProjectInfoBox from "../ProjectInfoBox";
import ShortFactsBox from "../ShortFactsBox";
import FavoriteButton from "../FavoriteButton";

const ProjectHeader = styled.div`
  display: flex;
`;
export default function Project({ project, favorites, onToggleFavorite }) {
  return (
    <>
      <ProjectHeader>
        <h1>{project.title}</h1>
        <FavoriteButton
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
          id={project._id}
          size={40}
        ></FavoriteButton>
      </ProjectHeader>
      <ShortFactsBox project={project}></ShortFactsBox>
      <ProjectInfoBox title="Tools" text={project.tools}></ProjectInfoBox>
      <ProjectInfoBox title="Material" text={project.material}></ProjectInfoBox>
      <ProjectInfoBox
        title="Instructions"
        text={project.instructions}
      ></ProjectInfoBox>
    </>
  );
}
