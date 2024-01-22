import styled from "styled-components";
import Link from "next/link";
import ShortFactsBox from "../ShortFactsBox";
import FavoriteButton from "../FavoriteButton";
import Image from "next/image";

const StyledCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  margin: auto;
  overflow: hidden;
`;

const StyledCardContent = styled.div`
  padding: 10px;
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

const ProjectImage = styled(Image)``;

export default function Card({ project, favorites, onToggleFavorite }) {
  return (
    <StyledLink key={project._id} href={`projects/${project._id}`}>
      <StyledCard>
        <ProjectImage
          src={project.image}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="image of the diy project"
        ></ProjectImage>
        <StyledCardContent>
          <StyledTitleSection>
            <ProjectTitle>{project.title}</ProjectTitle>
            <FavoriteButton
              id={project._id}
              favorites={favorites}
              onToggleFavorite={onToggleFavorite}
            ></FavoriteButton>
          </StyledTitleSection>
          <ShortFactsBox project={project}></ShortFactsBox>
        </StyledCardContent>
      </StyledCard>
    </StyledLink>
  );
}
