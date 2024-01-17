import ProjectList from "@/components/ProjectList";

export default function FavoritesPage({
  projects,
  favorites,
  onToggleFavorite,
}) {
  // const onlyFavoriteProjects = projects.filter((project) => {
  //   ;
  // });

  const onlyFavoriteProjects = projects.filter((project) =>
    favorites.includes(project._id)
  );

  console.log(onlyFavoriteProjects);
  return (
    <>
      <h1>Your favorite projects</h1>
      <ProjectList
        projects={onlyFavoriteProjects}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      ></ProjectList>
    </>
  );
}
