import styled from "styled-components";
import Link from "next/link";
import ShortFactsBox from "../ShortFactsBox";
import FavoriteButton from "../FavoriteButton";
import Image from "next/image";
import themes from "@/components/Themes";
import { mutate } from "swr";

const StyledCard = styled.div`
  background-color: ${(props) =>
    themes[props.theme][`${props.category}CardColor`]};
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
  color: ${(props) => themes[props.theme].primaryButtonTextColor};
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
  theme,
}) {
  async function countCardClick() {
    const newCount = project.count + 1;
    const projectData = { ...project, count: newCount };
    const response = await fetch(`/api/projects/${project._id}`, {
      method: "PATCH",
      body: JSON.stringify(projectData),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      mutate("/api/projects", response);
    }
  }

  return (
    <StyledLink
      key={project._id}
      href={`/projects/${project._id}`}
      onClick={() => countCardClick(project._id)}
    >
      <StyledCard theme={theme} category={project.category}>
        <ProjectImage
          src={project.image}
          width={0}
          height={0}
          sizes="100vw"
          alt="image of the diy project"
        />
        <StyledCardContent>
          <StyledTitleSection>
            <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
            {favorites ? (
              <FavoriteButton
                theme={theme}
                id={project._id}
                favorites={favorites}
                onToggleFavorite={onToggleFavorite}
              />
            ) : null}
          </StyledTitleSection>
          <ShortFactsBox theme={theme} project={project} isWhite={true} />
        </StyledCardContent>
        {children}
      </StyledCard>
    </StyledLink>
  );
}
