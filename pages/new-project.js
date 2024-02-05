import Form from "@/components/Form";
import { useRouter } from "next/router";
import styled from "styled-components";
import { mutate } from "swr";

const NewProjectTitle = styled.h2`
  text-align: center;
  font-size: 1.5 rem;
  padding-top: 20px;
`;

export default function NewProjectPage({theme, color}) {
  const router = useRouter();

  async function handleAddProject(projectData) {
    const response = await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify(projectData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const res = await fetch("/api/projects");
      mutate("/api/projects", res.json());
      router.push("/");
    }
  }
  function handleCancel() {
    router.push("/");
  }

  return <>
  <NewProjectTitle>Add a new project</NewProjectTitle>
  <Form theme={theme} color={color} onSubmit={handleAddProject} onCancel={handleCancel} />;
  </>
}
