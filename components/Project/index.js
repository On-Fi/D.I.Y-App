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
import TrashIcon from "../Card/TrashIcon";
import PencilIcon from "../Card/PencilIcon";
import themes from "@/components/Themes";
const ProjectHeader = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  margin-top: 10px;
`;

const ButtonSection = styled.div`
  display: flex;
  margin: 10px;
`;

const DeleteButton = styled.button`
  border: none;
  padding: 10px;
  border-radius: 10px;
  background-color: #ff1a1a;
  margin-right: auto;
`;
const StyledLink = styled(Link)`
  border: none;
  padding: 10px;
  border-radius: 10px;
  background-color: #ff8c00;
  margin-left: auto;
  text-decoration: none;
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

const PopularityInfo = styled.p`
  width: 90%;
  margin: auto;
  background-color: ${(props) => themes[props.theme].primaryButtonColor};
  color: ${(props) => themes[props.theme].primaryButtonTextColor};
  border-radius: 10px;
  padding: 10px;
  text-align: center;
`;

const HeaderImage = styled(Image)`
  width: 100%;
  height: auto;
  @media (min-width: 1200px) {
    height: 400px;
    width: 100%;
    object-fit: cover;
  }
`;

const StylingContainer = styled.div`
  @media (min-width: 1200px) {
    width: 90%;
    margin: auto;
    display: flex;

    & aside {
      min-width: 30%;
    }
  }
`;

const Subheading = styled.h2`
  text-align: center;
`;

export default function Project({
  project,
  favorites,
  onToggleFavorite,
  articles,
  theme,
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
      <HeaderImage
        src={project.image}
        width={0}
        height={0}
        sizes="100vw"
        alt="image of the diy project"
      />
      <ProjectHeader>
        <h1>{project.title}</h1>
        <FavoriteButton
          theme={theme}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
          id={project._id}
          size={40}
        ></FavoriteButton>
      </ProjectHeader>
      <ShortFactsBox
        theme={theme}
        color="secondary"
        project={project}
      ></ShortFactsBox>
      <StylingContainer>
        <aside>
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
                  <AmountSpan> {item.amount} </AmountSpan>{" "}
                  <span>{item.name} </span>
                </MaterialListItem>
              ))}
            </MaterialList>
          </ProjectInfoBox>
        </aside>
        <InstructionInfoBox>
          <h2>Instructions :</h2>
          {project.instructions.map((step, index) => (
            <StyledInstructionStep key={step.id}>
              <p>{index + 1}.</p>
              <p>{step.text}</p>
            </StyledInstructionStep>
          ))}
        </InstructionInfoBox>
      </StylingContainer>
      {project.count > 20 ? (
        <PopularityInfo theme={theme}>
          This project is very popular. 🤩
          <br />
          {project.count} users have visited this page so far.
        </PopularityInfo>
      ) : project.count === 1 ? (
        <PopularityInfo theme={theme}>
          <br /> You are the first user visiting this page!!!
        </PopularityInfo>
      ) : (
        <PopularityInfo theme={theme}>
          This project is very new to woodworm.
          <br />
          {project.count} users have clicked it so far.
        </PopularityInfo>
      )}
      <Subheading>Related Articles:</Subheading>
      <ArticleCardList articles={articles} />
      <ButtonSection theme={theme}>
        {session && session.user.email === project.author && (
          <>
            <DeleteButton onClick={handleDelete}>
              <TrashIcon theme={theme} />
            </DeleteButton>
            <StyledLink href={`${project._id}/edit`}>
              <PencilIcon theme={theme} />
            </StyledLink>
          </>
        )}
      </ButtonSection>
    </>
  );
}
