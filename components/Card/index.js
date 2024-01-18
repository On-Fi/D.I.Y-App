import styled from "styled-components";
import Link from "next/link";
import ShortFactsBox from "../ShortFactsBox";
import FavoriteButton from "../FavoriteButton";

const StyledCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  margin: auto;
`;

const ProjectTitle = styled.h3`
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 85%;
`;

const StyledTitleSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Card({ project, favorites, onToggleFavorite }) {
  return (
    <StyledLink key={project._id} href={`projects/${project._id}`}>
      <StyledCard>
        <StyledTitleSection>
          <ProjectTitle>{project.title}</ProjectTitle>
          <FavoriteButton
            id={project._id}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
          ></FavoriteButton>
        </StyledTitleSection>
        <ShortFactsBox project={project}></ShortFactsBox>
      </StyledCard>
    </StyledLink>
  );
}
