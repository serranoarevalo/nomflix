import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.nav`
  background-color: rgba(0, 0, 0, 0.9);
  padding: 0px 20px;
  padding-top: 15px;
  display: flex;
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  height: 45px;
  svg {
    fill: white;
    height: 15px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  border-bottom: ${props =>
    props.selected ? "5px solid #3498db" : "5px solid transparent"};
  transition: border-bottom 0.5s ease-in-out;
  padding-bottom: 10px;
  width: 80px;
  display: flex;
  align-items: center;
  font-size: 13px;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <NavLink selected={pathname === "/"} to="/">
      Movies
    </NavLink>
    <NavLink selected={pathname === "/tv"} to="/tv">
      TV
    </NavLink>
    <NavLink selected={pathname === "/search"} to="/search">
      Search
    </NavLink>
  </Header>
));
