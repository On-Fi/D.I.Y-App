import styled from "styled-components";
import ProjectList from "@/components/ProjectList";
import FilterSection from "@/components/FilterSection";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import LoginButton from "@/components/Login-Button";
import NextAuth from "next-auth/next";
import { useSession, signIn, signOut } from "next-auth/react";

const Subline = styled.h2`
  font-size: 2rem;
  margin-left: 20px;
  cursor: default;
`;

const initialFilter = {
  time: 24,
  difficulty: null,
  category: null,
  priceCategory: null,
  searchTerm: null,
};

export default function HomePage({ projects, favorites, onToggleFavorite }) {
  const [filters, setFilters] = useState(initialFilter);
  const projectsToDisplay = updateProjectsToDisplay(filters);
  const { data: session } = useSession();

  function handleFilter(value, name) {
    setFilters({ ...filters, [name]: value });
  }

  function handleSearch(searchTerm) {
    setFilters({ ...filters, searchTerm: searchTerm });
  }

  function updateProjectsToDisplay() {
    const filteredByTime = filters.time
      ? projects.filter((project) => project.time <= filters.time)
      : projects;

    const filteredByCategory = filters.category
      ? filteredByTime.filter(
          (project) => project.category === filters.category
        )
      : filteredByTime;

    const filteredByPriceCategory = filters.priceCategory
      ? filteredByCategory.filter(
          (project) => project.priceCategory === filters.priceCategory
        )
      : filteredByCategory;

    const filteredByDifficulty = filters.difficulty
      ? filteredByPriceCategory.filter(
          (project) => project.difficulty === filters.difficulty
        )
      : filteredByPriceCategory;

    const filteredBySearchTerm = filters.searchTerm
      ? filteredByDifficulty.filter((project) =>
          project.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
        )
      : filteredByDifficulty;

    return filteredBySearchTerm;
  }

  function handleResetFilter() {
    setFilters(initialFilter);
  }

  return (
    <>
      <Subline>All projects</Subline>
      <LoginButton />
      {session && <SearchBar onSearch={handleSearch} filters={filters} />}
      <FilterSection
        onResetFilter={handleResetFilter}
        filters={filters}
        handleFilter={handleFilter}
      />
      <ProjectList
        projectsToDisplay={projectsToDisplay}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
