import styled from "styled-components";

const StyledArticleCard = styled.div`
padding: 10px;
  // margin: 10px;
  background-color: #858f87;
  color: white;
  border-radius: 10px;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${(
    props
  ) => props.image});
  background-size: cover;

}
`;

export default function ArticleCard({ article }) {
  return (
    <StyledArticleCard image={article.image}>
      <h3>{article.title}</h3>
      <p>{article.body.slice(0, 100)}...</p>
    </StyledArticleCard>
  );
}
