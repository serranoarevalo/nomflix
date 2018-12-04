import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Poster = ({ imageUrl, rating, name, year, seasons, id }) => null;

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  rating: PropTypes.number,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  seasons: PropTypes.string
};

export default Poster;
