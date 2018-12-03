import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div``;

export default () => (
  <Header>
    <Link to="/movies">Movies</Link>
    <Link to="/tv">TV</Link>
  </Header>
);
