import Image from "next/image";
import styled from "styled-components";

const StyledArticleCard = styled.div`
  display: flex;
  margin: 10px;
  background-color: #858f87;
  color: white;
  border-radius: 10px;
  gap: 10px;
  align-items: center;
  overflow: hidden;
`;

export default function ArticleCard({ article }) {
  return (
    <StyledArticleCard>
      <Image src={article.image} height="100" width="100" alt="article image" />
      <h3>{article.title}</h3>
    </StyledArticleCard>
  );
}
