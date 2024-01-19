import Form from "@/components/Form";
import { useRouter } from "next/router";

export default function NewProjectPage() {
  const router = useRouter();

  async function handleAddProject(projectData) {
    const response = await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify(projectData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      router.push("/");
    }
  }
  return <Form onSubmit={handleAddProject} />;
}
