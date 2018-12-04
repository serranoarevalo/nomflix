import React from "react";
import PropTypes from "prop-types";

const TVPresenter = ({ loading, error, popular, topRated, airingToday }) =>
  null;

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingToday: PropTypes.array
};

export default TVPresenter;
