import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "../../Components/Loading";
import ErrorText from "../../Components/ErrorText";

const Container = styled.div`
  position: relative;
  padding: 50px;
  height: calc(100vh - 45px);
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.bgImage});
  background-size: 100%;
  background-position: center center;
  position: absolute;
  filter: blur(5px);
  top: 0;
  left: 0;
  z-index: 0;
`;
const Content = styled.div`
  position: relative;
  z-index: 9;
  width: 100%;
  height: 100%;
`;

const Poster = styled.div`
  height: 100%;
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  border-radius: 7px;
  background-position: center center;
`;

const DetailPresenter = ({ loading, result, error }) =>
  loading ? (
    <Loading />
  ) : error ? (
    <ErrorText text={error} />
  ) : (
    <Container>
      <Background
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Poster
          bgImage={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
        />
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  result: PropTypes.object,
  error: PropTypes.string
};

export default DetailPresenter;
