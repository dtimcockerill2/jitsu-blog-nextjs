import Link from "next/link";
import styled, { css } from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
`;

const NavLogo = styled.div`
  margin: 10px;
  padding: 10px;
  flex: flex-right;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 10px;
  padding: 10px;
  flex: flex-left;
`;

const ListItem = styled.li`
  display: inline;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

export default function NavBar() {
  return (
    <div>
      {/* <Logo /> */}
      <Nav>
        <NavLogo>Flow State</NavLogo>
        <NavList>
          <ListItem>
            <Link href="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link href="/posts">Posts</Link>
          </ListItem>
          <ListItem>
            <Link href="/about">About</Link>
          </ListItem>
        </NavList>
      </Nav>
    </div>
  );
}
