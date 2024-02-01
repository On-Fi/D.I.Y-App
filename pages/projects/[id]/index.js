import { useRouter } from "next/router";
import useSWR from "swr";
import Project from "@/components/Project";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function DetailPage({ favorites, onToggleFavorite }) {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: project,
    isLoading,
    error,
  } = useSWR(`/api/projects/${id}`, { fallbackData: [] });

  if (isLoading || error) return <LoadingSpinner />;

  return (
    <Project
      project={project}
      favorites={favorites}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
