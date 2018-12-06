import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movies, tv } from "../../api";

export default class extends React.Component {
  state = {
    loading: false,
    movieResults: null,
    showResults: null,
    searchingBy: "",
    error: null
  };

  updateSearchingBy = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      searchingBy: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchingBy } = this.state;
    if (searchingBy !== "") {
      this.search(searchingBy);
    }
  };

  search = async searchingBy => {
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults }
      } = await movies.searchMovies(searchingBy);
      const {
        data: { results: showResults }
      } = await tv.searchTv(searchingBy);
      this.setState({
        movieResults,
        showResults
      });
      console.log(movieResults);
    } catch {
      this.setState({
        error: "Can't search"
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      loading,
      error,
      movieResults,
      showResults,
      searchingBy
    } = this.state;

    return (
      <SearchPresenter
        loading={loading}
        error={error}
        movieResults={movieResults}
        showResults={showResults}
        searchingBy={searchingBy}
        updateSearchingBy={this.updateSearchingBy}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
