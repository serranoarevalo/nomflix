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

const HomePresenter = ({ loading, error, popular, topRated, airingToday }) =>
  loading ? (
    <Loading />
  ) : (
    <Container>
      {popular && (
        <Section title="Popular Shows">
          {popular.map(show => (
            <Poster
              imageUrl={show.poster_path}
              rating={show.vote_average}
              name={show.original_name}
              year={show.first_air_date.substring(0, 4)}
              isTv={true}
              id={show.id}
              key={show.id}
            />
          ))}
        </Section>
      )}
      {topRated && (
        <Section title="Top Rated">
          {topRated.map(show => (
            <Poster
              imageUrl={show.poster_path}
              rating={show.vote_average}
              name={show.original_name}
              year={show.first_air_date.substring(0, 4)}
              isTv={true}
              id={show.id}
              key={show.id}
            />
          ))}
        </Section>
      )}
      {airingToday && (
        <Section title="Airing Today">
          {airingToday.map(show => (
            <Poster
              imageUrl={show.poster_path}
              rating={show.vote_average}
              name={show.original_name}
              year={show.first_air_date.substring(0, 4)}
              isTv={true}
              id={show.id}
              key={show.id}
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
  topRated: PropTypes.array,
  airingToday: PropTypes.array
};

export default HomePresenter;
