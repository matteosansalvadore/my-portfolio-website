import React from "react";
import styled from "styled-components";
import { Home } from "react-feather";

const Main = styled.div`
  width: 300px;
  height: 100vh;
  background-color: green;
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  font-size: 20px;
  color: #111827;
  font-weight: bold;
  margin: 0;
`;

const NavItem = styled.a`
  color: #9ca3af;
  text-decoration: none;
  padding: 10px 0;
`;

export default function Navbar() {
  return (
    <div>
      <Main>
        <Name>Matteo</Name>
        <Name>Sansalvadore</Name>
        <NavItem href="#">
          <Home />
          Home Page
        </NavItem>
        <NavItem href="#">Projects</NavItem>
        <NavItem href="#">Contacts</NavItem>
      </Main>
    </div>
  );
}
