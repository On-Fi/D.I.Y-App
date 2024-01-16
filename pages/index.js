import styled from "styled-components";
import ProjectList from "@/components/ProjectList";
import Wrapper from "@/components/Wrapper";

const Subline = styled.h2`
  font-size: 2rem;
  margin-left: 20px;
  cursor: default;
`;

export default function HomePage({ projects }) {
  return (
    <>
      <Subline>All Projects</Subline>
      <ProjectList projects={projects} />
    </>
  );
}
