import ProjectList from "@/components/ProjectList";

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
      <h1>Your favorite projects</h1>
      <ProjectList theme={theme}
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
