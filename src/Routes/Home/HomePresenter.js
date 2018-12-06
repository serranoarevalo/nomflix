import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "Components/Loading";
import Poster from "Components/Poster";
import Section from "Components/Section";
import ErrorText from "Components/ErrorText";

const Container = styled.div`
  padding: 10px;
  padding-top: 30px;
`;

const HomePresenter = ({ loading, error, popular, upcoming, nowPlaying }) =>
  loading ? (
    <Loading />
  ) : (
    <Container>
      {popular && (
        <Section title="Popular Movies">
          {popular.map(movie => (
            <Poster
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              name={movie.title}
              year={movie.release_date.substring(0, 4)}
              isTv={false}
              id={movie.id}
              key={movie.id}
            />
          ))}
        </Section>
      )}
      {upcoming && (
        <Section title="Upcoming Movies">
          {upcoming.map(movie => (
            <Poster
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              name={movie.title}
              year={movie.release_date.substring(0, 4)}
              isTv={false}
              id={movie.id}
              key={movie.id}
            />
          ))}
        </Section>
      )}
      {nowPlaying && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <Poster
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              name={movie.title}
              year={movie.release_date.substring(0, 4)}
              isTv={false}
              id={movie.id}
              key={movie.id}
            />
          ))}
        </Section>
      )}
      {error && <ErrorText text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  nowPlaying: PropTypes.array
};

export default HomePresenter;
