import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "Components/Loading";
import Poster from "Components/Poster";
import Section from "Components/Section";
import ErrorText from "Components/ErrorText";
import { movies } from "../../api";

const Container = styled.div`
  padding: 10px;
  padding-top: 30px;
`;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [popular, setPopular] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [nowPlaying, setNowPlaying] = useState(null);

  const getMovies = async () => {
    try {
      const {
        data: { results: popular }
      } = await movies.getPopular();
      const {
        data: { results: upcoming }
      } = await movies.getUpcoming();
      const {
        data: { results: nowPlaying }
      } = await movies.getNowPlaying();
      setPopular(popular);
      setUpcoming(upcoming);
      setNowPlaying(nowPlaying);
    } catch {
      setError("Could not get movies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return loading ? (
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
};

export default Home;
