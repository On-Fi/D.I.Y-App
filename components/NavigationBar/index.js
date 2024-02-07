import styled from "styled-components";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import HomeIcon from "./HomeIcon";
import PlusIcon from "./PlusIcon";
import UserIcon from "./UserIcon";
import LightBulbIcon from "./LightbulbIcon";
import themes from "../Themes";

const Navbar = styled.nav`
  display: flex;
  background-color: ${(props) => themes[props.theme].navbarBackgroundColor};
  padding: 3px;
  position: absolute;
  width: 100%;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

const NavLink = styled(Link)`
  color: #000;
  padding: 10px 20px;
  background-color: ${(props) => themes[props.theme].navbarBackgroundColor};
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${(props) =>
      themes[props.theme].navbarButtonClickedColor};
  }

  &:active {
    transform: scale(0.95);
    background-color: ${(props) =>
      themes[props.theme].navbarButtonClickedColor};
  }
`;

const NavButton = styled.button`
  color: #000;
  border: none;
  padding: 15px 20px;
  background-color: transparent;
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:active {
    transform: scale(0.95);
    background-color: ${(props) =>
      themes[props.theme].navbarButtonClickedColor};
  }
`;

export default function NavigationBar({ theme }) {
  const { data: session } = useSession();

  return (
    <Navbar theme={theme}>
      <NavLink theme={theme} href="/">
        <HomeIcon theme={theme} />
      </NavLink>
      {session ? (
        <NavLink theme={theme} href="/new-project">
          <PlusIcon theme={theme} />
        </NavLink>
      ) : (
        <NavButton theme={theme} onClick={() => signIn()}>
          <PlusIcon theme={theme} />
        </NavButton>
      )}

      <NavLink theme={theme} href="/articles">
        <LightBulbIcon theme={theme} />
      </NavLink>

      <NavLink theme={theme} href="/profile">
        <UserIcon theme={theme} />
      </NavLink>
    </Navbar>
  );
}
