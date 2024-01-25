import styled from "styled-components";
import ProjectList from "@/components/ProjectList";
import FilterSection from "@/components/FilterSection";
import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";

const Subline = styled.h2`
  font-size: 2rem;
  margin-left: 20px;
  cursor: default;
`;

export default function HomePage({ projects, favorites, onToggleFavorite }) {
  const [projectsToDisplay, setProjectsToDisplay] = useState(projects);
  const [filter, setFilter] = useState({
    time: null,
    difficulty: null,
    category: null,
    priceCategory: null,
  });

  useEffect(() => {
    handleFilter(filter);
  }, [filter]);

  function handleFilter() {
    const filteredByTime = filter.time
      ? projects.filter((project) => project.time <= filter.time)
      : projects;

    const filteredByCategory = filter.category
      ? filteredByTime.filter((project) => project.category === filter.category)
      : filteredByTime;

    const filteredByPriceCategory = filter.priceCategory
      ? filteredByCategory.filter(
          (project) => project.priceCategory === filter.priceCategory
        )
      : filteredByCategory;

    const filteredByDifficulty = filter.difficulty
      ? filteredByPriceCategory.filter(
          (project) => project.difficulty === filter.difficulty
        )
      : filteredByPriceCategory;
    setProjectsToDisplay(filteredByDifficulty);
  }

  function handleTimeFilter(time) {
    setFilter({ ...filter, time: time });
  }

  function handleCategoryFilter(category) {
    setFilter({ ...filter, category: category });
  }

  function handlePriceCategoryFilter(priceCategory) {
    setFilter({ ...filter, priceCategory: priceCategory });
  }

  function handleDifficultyFilter(difficulty) {
    setFilter({ ...filter, difficulty: difficulty });
  }

  function handleSearch(searchTerm) {
    const filteredProjects = projectsToDisplay.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProjectsToDisplay(filteredProjects);
  }
  return (
    <>
      <Subline>All projects</Subline>
      <SearchBar onSearch={handleSearch} />
      <FilterSection
        handleTimeFilter={handleTimeFilter}
        handleDifficultyFilter={handleDifficultyFilter}
        handleCategoryFilter={handleCategoryFilter}
        handlePriceCategoryFilter={handlePriceCategoryFilter}
      />
      <ProjectList
        projectsToDisplay={projectsToDisplay}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
