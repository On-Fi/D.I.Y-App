import styled from "styled-components";
import Header from "../components/Header";
import ProjectList from "@/components/ProjectList";

const StyledH2 = styled.h2`
  font-size: 2rem;
  margin-left: 20px;
  cursor: default;
`;

export default function HomePage({ projects }) {
  return (
    <div>
      <Header />
      <StyledH2>All Projects</StyledH2>
      <ProjectList projects={projects} />
    </div>
  );
}
