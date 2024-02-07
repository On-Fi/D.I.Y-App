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
  theme,
}) {
  const isFavorite = favorites.includes(id);
  return (
    <StyledFavoriteButton
      theme={theme}
      type="button"
      onClick={(event) => onToggleFavorite(id, event)}
      aria-label="Button to add a project to favorite list"
    >
      {isFavorite ? (
        <HeartFilled theme={theme} size={size} />
      ) : (
        <HeartEmpty theme={theme} size={size} />
      )}
    </StyledFavoriteButton>
  );
}
