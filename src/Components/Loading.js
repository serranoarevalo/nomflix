import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  margin-top: 50px;
  font-size: 30px;
`;

export default () => (
  <Container>
    <span role="img" aria-label="loading">
      ⏰
    </span>
  </Container>
);
