import { useSession } from "next-auth/react";
import Card from "@/components/Card";
import styled from "styled-components";
import Button from "@/components/Button";
import PencilIcon from "@/components/Card/PencilIcon";
import TrashIcon from "@/components/Card/TrashIcon";
import { mutate } from "swr";
import Link from "next/link";
import { useRouter } from "next/router";
import themes from "@/components/Themes";
import BackArrowIcon from "@/components/ArticleCard/BackArrowIcon";

const Container = styled.div`
  width: 90%;
  margin: auto;
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  border: none;
  padding: 10px;
  background-color: #f9c858;
  border-radius: 20px;
  background-color: ${(props) => themes[props.theme].primaryButtonColor};
`;

const BackToProfileLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function MyProjects({ projects, theme }) {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) {
    router.push("/404");
    return;
  }
  const myProjects = projects.filter(
    (project) => project.author === session.user.email
  );

  const handleDelete = async (id, event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to delete this project?")) {
      await fetch(`/api/projects/${id}`, { method: "DELETE" });
      const res = await fetch("/api/projects");
      mutate("/api/projects", res.json());
    }
  };

  return (
    <Container>
      <BackToProfileLink href="/profile" aria-label="Go back to profile">
        <BackArrowIcon title="icon showing an arrow" />
        <span>Back to profile</span>
      </BackToProfileLink>
      <h2>My projects</h2>
      {myProjects.map((project) => (
        <>
          <Card theme={theme} key={project._id} project={project}>
            <ButtonSection theme={theme}>
              <StyledLink theme={theme} href={`/projects/${project._id}/edit`}>
                <PencilIcon theme={theme} />
              </StyledLink>
              <Button
                theme={theme}
                type="button"
                onClick={(event) => handleDelete(project._id, event)}
              >
                <TrashIcon theme={theme} />
              </Button>
            </ButtonSection>
          </Card>
        </>
      ))}
    </Container>
  );
}
