import Form from "@/components/Form";
import { useRouter } from "next/router";
import useSWR from "swr";
import { mutate } from "swr";

export default function EditPage() {
  const router = useRouter();
  const { id } = router.query;
  const { projectData } = useSWR(`/api/projects/${id}`);
  async function handleDings(projectData) {
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
  return <Form handleDings={handleDings} />;
}
