import { useRouter } from 'next/router';
import useSWR from 'swr';
import LoadingSpinner from '@/components/LoadingSpinner';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

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
      <Image src={article.image} alt={article.title} width={600} height={400} />
      <h1>{article.title}</h1>
      <ReactMarkdown>{article.body}</ReactMarkdown>
      <Link href="/articles">Back to articles</Link>
    </div>
  );
}
