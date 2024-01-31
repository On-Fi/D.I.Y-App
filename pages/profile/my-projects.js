import { useSession } from "next-auth/react";
import Card from "@/components/Card";
import styled from "styled-components";
import Button from "@/components/Button";

const Container = styled.div`
  width: 90%;
  margin: auto;
`;

export default function MyProjects({ projects }) {
  const { data: session } = useSession();
  if (!session) {
    return;
  }
  const myProjects = projects.filter(
    (project) => project.author === session.user.email
  );

  return (
    <Container>
      <h2>My projects</h2>
      {myProjects.map((project) => (
        <>
          <Card key={project._id} project={project}>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </Card>
        </>
      ))}
    </Container>
  );
}
