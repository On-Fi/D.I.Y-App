import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Card from "../components/Card";
// import projects from "./projects.json"; // Das json kann bald weg
import useSWR from "swr";

const StyledH2 = styled.h2`
  font-size: 2rem;
  margin-left: 20px;
  cursor: default;
`;

export default function HomePage() {
  // const { data: projects, isLoading } = useSWR("/api/projects");
  // if (!projects) {
  //   console.log("Projects noch nicht da");
  //   return <p>Gibt keine projects</p>;
  // }
  // if (isLoading) {
  //   console.log("Projects laden");
  //   return <p>Projects are loading</p>;
  // }
  const {
    data: projects,
    isLoading,
    error,
  } = useSWR("/api/projects", {
    fallbackData: [],
  });

  if (error) return <p>An error has occurred.</p>;
  if (!projects || isLoading) return <p>Projects are loading</p>;

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
