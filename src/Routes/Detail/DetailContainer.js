import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movies, tv } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    result: null,
    error: null
  };

  componentDidMount = () => {
    const {
      location: { pathname },
      match: {
        params: { id }
      }
    } = this.props;
    const isMovie = pathname.includes("movie");
    this.isMovie = isMovie;
    this.getDetail(id);
  };

  getDetail = async id => {
    try {
      let result;
      if (this.isMovie) {
        const { data } = await movies.getMovie(id);
        result = data;
      } else {
        const { data } = await tv.getShow(id);
        result = data;
      }
      this.setState({
        result
      });
    } catch {
      this.setState({
        error: "Can't find what you're looking for"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { loading, result, error } = this.state;
    return <DetailPresenter loading={loading} result={result} error={error} />;
  }
}
