import styled from "styled-components";
import ProjectInfoBox from "../ProjectInfoBox";
import ShortFactsBox from "../ShortFactsBox";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";
import { mutate } from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSession } from "next-auth/react";
import ArticleCardList from "../ArticleCardList";

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
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
  gap: 20px;
  border-bottom: 1px solid #ccc;
`;

const InstructionInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 15px;
  margin: 10px;
`;

const ToolList = styled.ul`
  width: 80%;
  margin: auto;
  padding-left: 0;
  list-style: none;
`;

const ToolListItem = styled.li`
  display: flex;
  padding-bottom: 5px;
  gap: 10px;
`;

const MaterialList = styled.ul`
  margin: auto;
  padding-left: 0;
  list-style: none;
`;

const MaterialListItem = styled.li`
  display: flex;
  padding-bottom: 5px;
`;

const AmountSpan = styled.span`
  color: #858f87;
  width: 10%;
  text-align: center;
`;

export default function Project({
  project,
  favorites,
  onToggleFavorite,
  articles,
}) {
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
      <ShortFactsBox color="#C4B8AA" project={project}></ShortFactsBox>
      <ProjectInfoBox title="Tools">
        <ToolList>
          {project.tools.map((tool) => (
            <ToolListItem key={tool.id}>{tool.name}</ToolListItem>
          ))}
        </ToolList>
      </ProjectInfoBox>
      <ProjectInfoBox title="Material">
        <MaterialList>
          {project.material.map((item) => (
            <MaterialListItem key={item.id}>
              <AmountSpan> {item.amount} </AmountSpan> <span>{item.name} </span>
            </MaterialListItem>
          ))}
        </MaterialList>
      </ProjectInfoBox>
      <InstructionInfoBox>
        <h2>Instructions :</h2>
        {project.instructions.map((step, index) => (
          <StyledInstructionStep key={step.id}>
            <p>{index + 1}.</p>
            <p>{step.text}</p>
          </StyledInstructionStep>
        ))}
      </InstructionInfoBox>
      <h2>Related Articles:</h2>
      <ArticleCardList articles={articles} />
      <ButtonSection>
        {session && session.user.email === project.author && (
          <>
            <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
            <StyledLink href={`${project._id}/edit`}>Edit</StyledLink>
          </>
        )}
      </ButtonSection>
    </>
  );
}
