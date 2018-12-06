import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Container = styled.div`
  color: white;
  width: 125px;
`;

const Votes = styled.span`
  font-size: 12px;
  position: relative;
  z-index: 9;
  transition: opacity 0.3s ease-in-out;
`;

const Image = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
`;

const ImageContainer = styled.div`
  position: relative;
  z-index: 2;
  height: 180px;
  margin-bottom: 5px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 5px;
  ${Votes} {
    opacity: 0;
  }
  &:hover {
    ${Votes} {
      opacity: 1;
    }
    ${Image} {
      opacity: 0.3;
    }
  }
`;

const Name = styled.span`
  color: rgba(255, 255, 255, 0.8);
  display: block;
  margin-bottom: 7px;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  font-size: 12px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ imageUrl, rating, name, year, isTv, id }) => (
  <Link to={isTv ? `/show/${id}` : `/movie/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgImage={
            imageUrl
              ? `https://image.tmdb.org/t/p/w500${imageUrl}`
              : require("../assets/noPoster.png")
          }
        />
        {rating > 0 ? (
          <Votes>
            <span role="img" aria-label="Stars">
              ⭐️
            </span>{" "}
            {rating}/10
          </Votes>
        ) : null}
      </ImageContainer>

      <Name>{name.length > 18 ? `${name.substring(0, 18)}...` : name}</Name>

      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  rating: PropTypes.number,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  isTv: PropTypes.bool.isRequired
};

export default Poster;
