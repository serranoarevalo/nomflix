import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "Components/Loading";
import Section from "Components/Section";
import Poster from "Components/Poster";
import ErrorText from "Components/ErrorText";

const Container = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-top: 50px;
`;

const Form = styled.form`
  all: unset;
  width: 100%;
  margin-bottom: 50px;
`;

const Input = styled.input`
  all: unset;
  font-size: 36px;
  color: white;
  width: 100%;
  padding-bottom: 10px;
`;

const SearchPresenter = ({
  loading,
  movieResults,
  showResults,
  searchingBy,
  onSearchChange,
  onSearchSubmit,
  error
}) => (
  <Container>
    <Form onSubmit={onSearchSubmit}>
      <Input
        placeholder="Search for a Movie or TV Show"
        autoFocus={true}
        value={searchingBy}
        onChange={onSearchChange}
      />
    </Form>
    {loading ? (
      <Loading />
    ) : (
      <>
        {movieResults && movieResults.length !== 0 && (
          <Section title="Movie Results">
            {movieResults.map(movie => (
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
        {showResults && showResults.length !== 0 && (
          <Section title="TV Show Results">
            {showResults.map(show => (
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
      </>
    )}
    {error && <ErrorText text={error} />}
    {movieResults &&
      movieResults.length === 0 &&
      showResults &&
      showResults.length === 0 && <ErrorText text={"Nothing was found"} />}
  </Container>
);

SearchPresenter.propTypes = {
  searchingBy: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  movieResults: PropTypes.array,
  showResults: PropTypes.array,
  error: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;
