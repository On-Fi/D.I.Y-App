import styled from "styled-components";
import ArticleCard from "../ArticleCard";

const List = styled.ul`
  width: 90%;
  margin: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1200px) {
    width: 90%;
    margin: auto;
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: start;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
  }
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
