import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "Components/Loading";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 10px;
  padding-top: 30px;
`;

const Section = styled.div`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-weight: 600;
  color: white;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 30px;
`;

const HomePresenter = ({ loading, error, popular, upcoming, nowPlaying }) =>
  loading ? (
    <Loading />
  ) : (
    <Container>
      {popular && (
        <Section>
          <SectionTitle>Popular Movies</SectionTitle>
          <Grid>
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
          </Grid>
        </Section>
      )}
      {upcoming && (
        <Section>
          <SectionTitle>Upcoming Movies</SectionTitle>
          <Grid>
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
          </Grid>
        </Section>
      )}
      {nowPlaying && (
        <Section>
          <SectionTitle>Now Playing</SectionTitle>
          <Grid>
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
          </Grid>
        </Section>
      )}
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
