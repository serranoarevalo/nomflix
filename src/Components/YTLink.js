import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.a`
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  &:hover {
    color: white;
    svg {
      fill: white;
    }
  }
  svg {
    margin-right: 10px;
    transition: color 0.3s ease-in-out;
    fill: rgba(255, 255, 255, 0.7);
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const YTLink = ({ id, title }) => (
  <Container href={`https://www.youtube.com/watch?v=${id}`} target="_blank">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
    >
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>{" "}
    {title}
  </Container>
);

YTLink.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default YTLink;
