import Form from "@/components/Form";
import { useRouter } from "next/router";
import { mutate } from "swr";

export default function NewProjectPage() {
  const router = useRouter();

  async function handleAddProject(projectData) {
    console.log("new project:", projectData);
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

  return <Form onSubmit={handleAddProject} onCancel={handleCancel} />;
}
