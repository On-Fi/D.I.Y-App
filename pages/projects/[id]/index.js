import { useRouter } from "next/router";
import useSWR from "swr";
import Project from "@/components/Project";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function DetailPage({ favorites, onToggleFavorite, articles, theme }) {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: project,
    isLoading,
    error,
  } = useSWR(`/api/projects/${id}`, { fallbackData: [] });

  if (isLoading) return <LoadingSpinner theme={theme} />;

  if (error || !project) {
    router.push("/404");
    return;
  }

  const articlesWithSameCategory = articles.filter(
    (article) => article.category === project.category
  );

  return (
    <Project
      theme={theme}
      project={project}
      favorites={favorites}
      onToggleFavorite={onToggleFavorite}
      articles={articlesWithSameCategory}
    />
  );
}
