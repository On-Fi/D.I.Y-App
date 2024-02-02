import ArticleCardList from "@/components/ArticleCardList";
import styled from "styled-components";

const Frame = styled.div`
  display: flex;
  flex-direction: column;
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
      <ArticleCardList articles={articles} />
    </Frame>
  );
}
