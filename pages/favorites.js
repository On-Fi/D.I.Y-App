import ProjectList from "@/components/ProjectList";

export default function FavoritesPage({
  projects,
  favorites,
  onToggleFavorite,
}) {
  const projectsToDisplay = projects.filter((project) =>
    favorites.includes(project._id)
  );

  console.log(projectsToDisplay);
  return (
    <>
      <h1>Your favorite projects</h1>
      <ProjectList
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
