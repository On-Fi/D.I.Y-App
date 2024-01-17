import HeartEmpty from "./HeartEmpty";
import HeartFilled from "./HeartFilled";
import styled from "styled-components";

const StyledFavoriteButton = styled.button`
  background-color: transparent;
  border: none;
`;

export default function FavoriteButton({ id, favorites, onToggleFavorite }) {
  const isFavorite = favorites.includes(id);
  console.log(isFavorite);
  return (
    <StyledFavoriteButton type="button" onClick={() => onToggleFavorite(id)}>
      {isFavorite ? <HeartFilled /> : <HeartEmpty />}
    </StyledFavoriteButton>
  );
}
