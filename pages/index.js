import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Card from "../components/Card";
import projects from "./projects.json"; // Das json kann bald weg

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
      {projects.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
}
