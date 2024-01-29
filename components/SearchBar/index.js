import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

const SearchBarContainer = styled.form`
  display: flex;
  margin: auto;
  margin-bottom: 20px;
  width: 85%;
  gap: 2px;
`;
const SearchInput = styled.input`
  flex: auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: 3px solid #90ee90;
  }
`;
const SearchButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #90ee90;
  color: #000;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #77dd77;
  }
  &:active {
    transform: scale(0.95);
  }
`;
export default function SearchBar({ onSearch, filters }) {
  function handleSubmit(event) {
    event.preventDefault();
    const searchTerm = event.target.elements.searchTerm.value;
    onSearch(searchTerm);
  }

  const [rerenderKey, setRerenderKey] = useState(0);

  useEffect(() => {
    setRerenderKey((prevKey) => prevKey + 1);
  }, [filters]);

  return (
    <SearchBarContainer id="form" onSubmit={handleSubmit} key={rerenderKey}>
      <SearchInput
        type="text"
        name="searchTerm"
        placeholder="..."
        defaultValue={filters.searchTerm || ""}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchBarContainer>
  );
}
