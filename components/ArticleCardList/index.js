import styled from "styled-components";
import ArticleCard from "../ArticleCard";

const List = styled.ul`
  width: 90%;
  margin: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function ArticleCardList({ articles }) {
  return (
    <List>
      {articles.map((article) => {
        return <ArticleCard key={article._id} article={article}></ArticleCard>;
      })}
    </List>
  );
}
