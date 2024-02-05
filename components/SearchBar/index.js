import styled from "styled-components";
import { useEffect, useState } from "react";
import MagnifyingGlassIcon from "./MagnifyingGlassIcon";
import themes from "@/components/Themes";

const SearchBarContainer = styled.form`
  display: flex;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 45px;
  width: 85%;
  gap: 2px;
`;
const SearchInput = styled.input`
  flex: auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  &:focus {
    outline: 3px solid ${(props) => themes[props.theme].primaryButtonColor};
  }
`;
const SearchButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${(props) => themes[props.theme].primaryButtonColor};
  color: #FFF;
  border-radius: 20px;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
`;
export default function SearchBar({ onSearch, filters, theme }) {
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
    <SearchBarContainer theme={theme}  id="form" onSubmit={handleSubmit} key={rerenderKey}>
      <SearchInput theme={theme} 
        type="text"
        name="searchTerm"
        placeholder="..."
        defaultValue={filters.searchTerm || ""}
      />
      <SearchButton theme={theme} type="submit"><MagnifyingGlassIcon theme={theme} /></SearchButton>
    </SearchBarContainer>
  );
}
