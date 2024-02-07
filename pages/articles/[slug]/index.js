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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function ArticlePage({ projects, theme }) {
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
      <StyledLink href="/articles" aria-label="Go back to all articles">
        <BackArrowIcon title="icon showing an arrow" />
        <span>All articles</span>
      </StyledLink>
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
      <ProjectList theme={theme} projectsToDisplay={projectsOfSameCategory} />

      <StyledLink href="/articles" aria-label="Go back to all articles">
        <BackArrowIcon title="icon showing an arrow" />
        <span>All articles</span>
      </StyledLink>
    </div>
  );
}
