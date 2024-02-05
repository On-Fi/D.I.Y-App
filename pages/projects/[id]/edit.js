import Form from "@/components/Form";
import { useRouter } from "next/router";
import useSWR from "swr";
import { mutate } from "swr";
import styled from "styled-components";
import LoadingSpinner from "@/components/LoadingSpinner";

const EditProjectTitle = styled.h2`
  text-align: center;
  font-size: 1.5 rem;
  padding-top: 20px;
`;

export default function EditPage({theme, color}) {
  const router = useRouter();

  const { id } = router.query;

  const { data: project, isLoading } = useSWR(`/api/projects/${id}`);
  async function handleEditProject(projectData) {
    const response = await fetch(`/api/projects/${id}`, {
      method: "PATCH",
      body: JSON.stringify(projectData),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      mutate("/api/projects", response);
      router.push(`/projects/${id}`);
    }
  }

  function handleCancel() {
    router.push(`/projects/${id}`);
  }

  if (isLoading) {
    return <LoadingSpinner theme={theme}/>;
  }

  if (!project) {
    router.push("/404");
    return;
  }

  return (
    <>
      <EditProjectTitle>Edit project</EditProjectTitle>
      <Form
        project={project}
        onSubmit={handleEditProject}
        onCancel={handleCancel}
        theme={theme}
        color={color}
      />
    </>
  );
}
