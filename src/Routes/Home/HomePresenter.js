import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const HomePresenter = ({ loading, error, popular, upcoming, nowPlaying }) => (
  <Container />
);

HomePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  nowPlaying: PropTypes.array
};

export default HomePresenter;
