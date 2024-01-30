import styled from "styled-components";
import Link from "next/link";
import HeartFilled from "../FavoriteButton/HeartFilled";
import { useSession, signIn } from "next-auth/react";

const Navbar = styled.nav`
  display: flex;
  background-color: #e8b100;
  padding: 20px;
  position: absolute;
  width: 100%;
  bottom: 0;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #000;
  padding: 10px 20px;
  background-color: #90ee90;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #77dd77;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const NavButton = styled.button`
  color: #000;
  border: none;
  padding: 10px 20px;
  background-color: #90ee90;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #77dd77;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function NavigationBar() {
  const { data: session } = useSession();

  return (
    <Navbar>
      <NavLink href="/">Home</NavLink>
      {session ? (
        <NavLink href="/new-project">+</NavLink>
      ) : (
        <NavButton onClick={() => signIn()}>+</NavButton>
      )}

      <NavLink href="/favorites">
        <HeartFilled />
      </NavLink>
    </Navbar>
  );
}
