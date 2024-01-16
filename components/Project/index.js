import styled from "styled-components";
import ProjectInfoBox from "../ProjectInfoBox";
import ShortFactsBox from "../ShortFactsBox";
import { Component } from "react";

const StyledBox = styled.div`
  background-color: #e8e8e8;
  border-radius: 20px;
  padding: 5px;
  margin: 10px;
`;

export default function Project({ project }) {
  return (
    <>
      <h1>{project.title}</h1>
      <ShortFactsBox project={project}></ShortFactsBox>
      <ProjectInfoBox title="Tools" text={project.tools}></ProjectInfoBox>
      <ProjectInfoBox title="Material" text={project.material}></ProjectInfoBox>
      <ProjectInfoBox
        title="Instructions"
        text={project.instructions}
      ></ProjectInfoBox>
    </>
  );
}
