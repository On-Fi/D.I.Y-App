import { useRouter } from "next/router";
import useSWR from "swr";
import Project from "@/components/Project";

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: project,
    isLoading,
    error,
    mutate,
  } = useSWR(`/api/projects/${id}`, { fallbackData: [] });

  if (isLoading || error) return <h2>Loading...</h2>;

  return <Project project={project}></Project>;
}
