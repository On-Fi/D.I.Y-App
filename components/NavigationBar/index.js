import styled from "styled-components";
import Link from "next/link";
import HeartFilled from "../FavoriteButton/HeartFilled";

const Navbar = styled.nav`
  display: flex;
  background-color: #fada5e;
  padding: 20px;
  position: absolute;
  width: 100%;
  bottom: 0;
  gap: 30px;
`;

const NavLink = styled(Link)`
  color: #000;
  padding: 10px 20px;
  background-color: #90ee90;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #77dd77;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function NavigationBar() {
  return (
    <Navbar>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/new-project">+</NavLink>
      <NavLink href="/favorites">
        <HeartFilled />
      </NavLink>
    </Navbar>
  );
}
