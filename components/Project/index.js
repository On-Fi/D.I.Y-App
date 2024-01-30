import styled from "styled-components";
import ProjectInfoBox from "../ProjectInfoBox";
import ShortFactsBox from "../ShortFactsBox";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";
import { mutate } from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSession } from "next-auth/react";

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonSection = styled.div`
  display: flex;
  margin: 10px;
`;

const DeleteButton = styled.button`
  border: none;
  padding: 10px;
  border-radius: 10px;
  background-color: salmon;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-right: auto;
  font-family: inherit;

  &:hover {
    background-color: red;
  }
`;
const StyledLink = styled(Link)`
  border: none;
  padding: 10px;
  border-radius: 10px;
  background-color: orange;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-left: auto;
  text-decoration: none;

  &:hover {
    background-color: darkorange;
  }
`;

const StyledInstructionStep = styled.li`
  display: flex;
  gap: 10px;
`;

const ToolList = styled.ul``;

export default function Project({ project, favorites, onToggleFavorite }) {
  const router = useRouter();
  const { data: session } = useSession();
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      await fetch(`/api/projects/${project._id}`, { method: "DELETE" });
      const res = await fetch("/api/projects");
      mutate("/api/projects", res.json());
      router.push("/");
    }
  };

  return (
    <>
      <Image
        src={project.image}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt="image of the diy project"
      />

      <ProjectHeader>
        <h1>{project.title}</h1>
        <FavoriteButton
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
          id={project._id}
          size={40}
        ></FavoriteButton>
      </ProjectHeader>

      <ShortFactsBox project={project}></ShortFactsBox>

      <ProjectInfoBox title="Tools">
        <ToolList>
          {project.tools.map((tool) => (
            <li key={tool.id}>{tool.name}</li>
          ))}
        </ToolList>
      </ProjectInfoBox>

      <ProjectInfoBox title="Material">
        <ToolList>
          {project.material.map((item) => (
            <StyledInstructionStep key={item.id}>
              {item.amount} x {item.name}
            </StyledInstructionStep>
          ))}
        </ToolList>
      </ProjectInfoBox>

      <ProjectInfoBox title="Instructions">
        {project.instructions.map((step, index) => (
          <StyledInstructionStep key={step.id}>
            <p>{index + 1}.</p>
            <p>{step.text}</p>
          </StyledInstructionStep>
        ))}
      </ProjectInfoBox>

      <ButtonSection>
        {session && session.user.email === project.author && (
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        )}
        {session && session.user.email === project.author && (
          <StyledLink href={`${project._id}/edit`}>Edit</StyledLink>
        )}
      </ButtonSection>
    </>
  );
}
