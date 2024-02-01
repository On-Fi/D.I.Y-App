import ArticleCard from "@/components/ArticleCard";

export default function KnowledgeOverview({ articles }) {
  console.log("hier:", articles);
  return (
    <div>
      {articles.map((article) => {
        return <ArticleCard key={article._id} article={article}></ArticleCard>;
      })}
    </div>
  );
}
