import { useRouter } from 'next/router';
import useSWR from 'swr';
import LoadingSpinner from '@/components/LoadingSpinner';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import styled from 'styled-components';
import BackArrowIcon from '@/components/ArticleCard/BackArrowIcon';

const ArticleImage = styled(Image)`
width: 100%;
height: auto;
`;

const ArticleTextContent = styled.div`
width: 90%;
margin: auto;
`;


export default function ArticlePage() {
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
  return (
    <div>
    <Link href="/articles"><BackArrowIcon/></Link>
      <ArticleImage src={article.image} alt={article.title} width={0}
        height={0}
        sizes="100vw"
/>
      <ArticleTextContent>
      <h2>{article.title}</h2>
      <ReactMarkdown>{article.body}</ReactMarkdown>
      </ArticleTextContent>
      <Link href="/articles"><BackArrowIcon/></Link>
    </div>
  );
}
