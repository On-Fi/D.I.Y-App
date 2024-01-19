import { useRouter } from "next/router";
import useSWR from "swr";
import Project from "@/components/Project";

export default function DetailPage({ favorites, onToggleFavorite }) {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: project,
    isLoading,
    error,
  } = useSWR(`/api/projects/${id}`, { fallbackData: [] });

  if (isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <Project
        project={project}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
