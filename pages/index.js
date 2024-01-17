import styled from "styled-components";
import ProjectList from "@/components/ProjectList";

const Subline = styled.h2`
  font-size: 2rem;
  margin-left: 20px;
  cursor: default;
`;

export default function HomePage({ projects, favorites, onToggleFavorite }) {
  return (
    <>
      <Subline>All projects</Subline>
      <ProjectList
        projects={projects}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
