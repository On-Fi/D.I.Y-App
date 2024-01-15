import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Card from "../components/Card";
// import projects from "./projects.json"; // Das json kann bald weg
import useSWR from "swr";
import ProjectList from "@/components/ProjectList";

const StyledH2 = styled.h2`
  font-size: 2rem;
  margin-left: 20px;
  cursor: default;
`;

export default function HomePage() {
  return (
    <div>
      <Header />
      <StyledH2>All Projects</StyledH2>
      <ProjectList />
    </div>
  );
}
