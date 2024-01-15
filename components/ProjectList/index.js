import React from "react";
import styled from "styled-components";
import Card from "../Card";
import useSWR from "swr";

export default function ProjectList() {
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
    <>
      {projects.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </>
  );
}
