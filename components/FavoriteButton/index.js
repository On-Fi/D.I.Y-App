import HeartEmpty from "./HeartEmpty";
import HeartFilled from "./HeartFilled";
import styled from "styled-components";

const StyledFavoriteButton = styled.button`
  background-color: transparent;
  border: none;
`;

export default function FavoriteButton({
  id,
  favorites,
  onToggleFavorite,
  size,
}) {
  const isFavorite = favorites.includes(id);
  return (
    <StyledFavoriteButton
      type="button"
      onClick={(event) => onToggleFavorite(id, event)}
    >
      {isFavorite ? <HeartFilled size={size} /> : <HeartEmpty size={size} />}
    </StyledFavoriteButton>
  );
}
