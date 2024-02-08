import ProjectList from "@/components/ProjectList";
import styled from "styled-components";
import Link from "next/link";
import BackArrowIcon from "@/components/ArticleCard/BackArrowIcon";

const BackToProfileLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function FavoritesPage({
  projects,
  favorites,
  onToggleFavorite,
  theme,
}) {
  const projectsToDisplay = projects.filter((project) =>
    favorites.includes(project._id)
  );

  return (
    <>
      <BackToProfileLink href="/profile" aria-label="Go back to profile">
        <BackArrowIcon title="icon showing an arrow" />
        <span>Back to profile</span>
      </BackToProfileLink>
      <h2>Your favorite projects</h2>
      <ProjectList
        theme={theme}
        projectsToDisplay={projectsToDisplay}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      ></ProjectList>
      {!projectsToDisplay.length ? (
        <p>You do not have any favorite projects yet</p>
      ) : (
        ""
      )}
    </>
  );
}
