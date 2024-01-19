import Form from "@/components/Form";
import { useRouter } from "next/router";
import useSWR from "swr";
import { mutate } from "swr";

export default function EditPage() {
  const router = useRouter();

  const { id } = router.query;
  const { data: project } = useSWR(`/api/projects/${id}`);
  async function handleEditProject(projectData) {
    const response = await fetch(`/api/projects/${id}`, {
      method: "PATCH",
      body: JSON.stringify(projectData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      mutate();
      router.push(`/`);
    }
  }
  console.log("log in edit js:", project);
  return <Form project={project} onSubmit={handleEditProject} />;
}
