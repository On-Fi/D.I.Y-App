import ArticleCard from "@/components/ArticleCard";
import styled from "styled-components";

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90%;
  margin: auto;
  margin-top: 20px;
  text-align: center;
`;

export default function KnowledgeOverview({ articles }) {
  return (
    <Frame>
      <h2>DIY knowledge</h2>
      <p>
        Get some more insights about various crafting topics and become the
        worlds greatest woodworm 🐛
      </p>
      {articles.map((article) => {
        return <ArticleCard key={article._id} article={article}></ArticleCard>;
      })}
    </Frame>
  );
}
