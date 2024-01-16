import { useRouter } from "next/router";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  background-color: #fada5e;
  padding: 20px;
  position: absolute;
  width: 100%;
  bottom: 0;
  gap: 30px;
`;

const NavLink = styled.a`
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

function NavigationBar() {
  const router = useRouter();

  return (
    <Navbar>
      <NavLink onClick={() => router.push("/")}>Home</NavLink>
      <NavLink onClick={() => router.push("/new-project")}>+</NavLink>
    </Navbar>
  );
}

export default NavigationBar;
