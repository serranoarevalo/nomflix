import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Container = styled.div``;

const Image = styled.div``;

const Votes = styled.span``;

const Data = styled.div``;

const Name = styled.span``;

const Year = styled.span``;

const DataColumn = styled.div``;

const Poster = ({ imageUrl, rating, name, year, seasons, id }) => (
  <Link to={seasons ? `/show/${id}` : `/movie/${id}`}>
    <Container>
      <Image bgImage={imageUrl}>
        <Votes>
          <span role="img" aria-label="Stars">
            ⭐️
          </span>{" "}
          {rating}/10
        </Votes>
      </Image>
      <Data>
        <DataColumn>
          <Name>{name}</Name>
          <Year>{year}</Year>
        </DataColumn>
        {seasons && (
          <DataColumn>
            {seasons === 1 ? "1 season" : `${seasons} seasons.`}
          </DataColumn>
        )}
      </Data>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  rating: PropTypes.number,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  seasons: PropTypes.string
};

export default Poster;
