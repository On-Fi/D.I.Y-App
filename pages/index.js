import styled from "styled-components";
import ProjectList from "@/components/ProjectList";
import useLocalStorageState from "use-local-storage-state";

const Subline = styled.h2`
  font-size: 2rem;
  margin-left: 20px;
  cursor: default;
`;

export default function HomePage({ projects }) {
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: "",
  });

  function handleToggleFavorite(id, event) {
    event.preventDefault();
    if (favorites.includes(id)) {
      setFavorites(
        favorites.filter((favorite) => {
          return favorite !== id;
        })
      );
    } else setFavorites([...favorites, id]);
  }
  return (
    <>
      <Subline>All Projects</Subline>
      <ProjectList
        projects={projects}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
