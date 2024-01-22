import Form from "@/components/Form";
import { useRouter } from "next/router";
import useSWR from "swr";
import { mutate } from "swr";

export default function EditPage() {
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

  if (!project || isLoading || !id) {
    return <p>is Loading...</p>;
  }

  return (
    <Form
      project={project}
      onSubmit={handleEditProject}
      onCancel={handleCancel}
    />
  );
}
