import styled from "styled-components";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import HomeIcon from "./HomeIcon";
import PlusIcon from "./PlusIcon";
import UserIcon from "./UserIcon";

const Navbar = styled.nav`
  display: flex;
  background-color: #626964;
  padding: 3px;
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
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #505451;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const NavLinkPlus = styled(NavLink)`
  background-color: #f9c858;
  border-radius: 50%;
  padding: 15px 20px;
`;

const NavButton = styled.button`
  color: #000;
  border: none;
  padding: 15px 20px;
  background-color: #f9c858;
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #505451;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function NavigationBar() {
  const { data: session } = useSession();

  return (
    <Navbar>
      <NavLink href="/">
        <HomeIcon />
      </NavLink>
      {session ? (
        <NavLinkPlus href="/new-project">
          <PlusIcon />
        </NavLinkPlus>
      ) : (
        <NavButton onClick={() => signIn()}>
          <PlusIcon />
        </NavButton>
      )}

      <NavLink href="/profile">
        <UserIcon />
      </NavLink>
    </Navbar>
  );
}
