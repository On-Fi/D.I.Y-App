import styled from "styled-components";
import Header from "../components/Header";
import ProjectList from "@/components/ProjectList";
import NavigationBar from "@/components/NavigationBar";

const Subline = styled.h2`
  font-size: 2rem;
  margin-left: 20px;
  cursor: default;
`;

export default function HomePage({ projects }) {
  return (
    <div>
      <Header />
      <Subline>All Projects</Subline>
      <ProjectList projects={projects} />
      <NavigationBar />
    </div>
  );
}
