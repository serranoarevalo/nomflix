import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Search } from "assets/search.svg";

const Header = styled.div``;

export default () => (
  <Header>
    <Link to="/">Movies</Link>
    <Link to="/tv">TV</Link>
    <Link to="/search">
      <Search />
    </Link>
  </Header>
);
