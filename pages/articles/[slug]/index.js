import { useRouter } from "next/router";
import useSWR from "swr";
import LoadingSpinner from "@/components/LoadingSpinner";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import styled from "styled-components";
import BackArrowIcon from "@/components/ArticleCard/BackArrowIcon";
import ProjectList from "@/components/ProjectList";

const ArticleImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const ArticleTextContent = styled.div`
  width: 90%;
  margin: auto;
`;

const StyledSubheading = styled.h3`
  text-align: center;
  margin-top: 40px;
`;

export default function ArticlePage({ projects }) {
  const router = useRouter();
  const { slug } = router.query;

  const {
    data: article,
    isLoading,
    error,
  } = useSWR(`/api/articles/${slug}`, { fallbackData: [] });

  if (isLoading) return <LoadingSpinner />;

  if (error || !article) {
    router.push("/404");
    return;
  }

  const projectsOfSameCategory = projects
    .filter((project) => project.category === article.category)
    .slice(0, 3);

  return (
    <div>
      <Link href="/articles">
        <BackArrowIcon />
      </Link>
      <ArticleImage
        src={article.image}
        alt={article.title}
        width={0}
        height={0}
        sizes="100vw"
      />
      <ArticleTextContent>
        <h2>{article.title}</h2>
        <ReactMarkdown>{article.body}</ReactMarkdown>
      </ArticleTextContent>
      <StyledSubheading>Related Projects:</StyledSubheading>
      <ProjectList projectsToDisplay={projectsOfSameCategory} />

      <Link href="/articles">
        <BackArrowIcon />
      </Link>
    </div>
  );
}
