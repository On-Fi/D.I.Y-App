import styled from "styled-components";
import ProjectInfoBox from "../ProjectInfoBox";
import ShortFactsBox from "../ShortFactsBox";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";

const ProjectHeader = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  margin: 10px;
  border: none;
  padding: 10px;
  border-radius: 10px;
  background-color: orange;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: darkorange;
  }
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
      <Link href={`${project._id}/edit`}>
        <StyledButton>Edit</StyledButton>
      </Link>
    </>
  );
}
