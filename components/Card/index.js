import styled from "styled-components";
import Link from "next/link";
import ShortFactsBox from "../ShortFactsBox";
import FavoriteButton from "../FavoriteButton";
import Image from "next/image";

const StyledCard = styled.div`
  border: 1px solid #c4b8aa;
  background-color: #c4b8aa;
  border-radius: 12px;
  cursor: pointer;
  margin: auto;
  overflow: hidden;
`;

const StyledCardContent = styled.div`
  padding: 10px;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  color: #fff;
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

const ProjectImage = styled(Image)`
  width: 100%;
  height: auto;
`;

export default function Card({
  project,
  favorites = null,
  onToggleFavorite = null,
  children,
}) {
  return (
    <StyledLink key={project._id} href={`/projects/${project._id}`}>
      <StyledCard>
        <ProjectImage
          src={project.image}
          width={0}
          height={0}
          sizes="100vw"
          alt="image of the diy project"
        />
        <StyledCardContent>
          <StyledTitleSection>
            <ProjectTitle>{project.title}</ProjectTitle>
            {favorites ? (
              <FavoriteButton
                id={project._id}
                favorites={favorites}
                onToggleFavorite={onToggleFavorite}
              />
            ) : null}
          </StyledTitleSection>
          <ShortFactsBox project={project} />
        </StyledCardContent>
        {children}
      </StyledCard>
    </StyledLink>
  );
}
