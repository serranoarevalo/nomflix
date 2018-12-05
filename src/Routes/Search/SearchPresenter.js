import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "Components/Loading";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding-top: 50px;
`;

const Form = styled.form`
  all: unset;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 36px;
  color: white;
  width: 100%;
  padding-bottom: 10px;
  margin-left: 10px;
`;

const SearchPresenter = ({
  loading,
  movieResults,
  showResults,
  searchingBy,
  updateSearchingBy,
  handleSubmit,
  error
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search for a Movie or TV Show"
        autoFocus={true}
        value={searchingBy}
        onChange={updateSearchingBy}
      />
    </Form>
    {loading ? <Loading /> : null}
  </Container>
);

SearchPresenter.propTypes = {
  searchingBy: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  movieResults: PropTypes.array,
  showResults: PropTypes.array,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateSearchingBy: PropTypes.func.isRequired
};

export default SearchPresenter;
