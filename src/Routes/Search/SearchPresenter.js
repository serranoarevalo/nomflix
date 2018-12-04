import React from "react";
import PropTypes from "prop-types";

const SearchPresenter = ({
  loading,
  movieResults,
  showResults,
  searchingBy,
  error
}) => null;

SearchPresenter.propTypes = {
  searchingBy: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  movieResults: PropTypes.array,
  showResults: PropTypes.array,
  error: PropTypes.string
};

export default SearchPresenter;
