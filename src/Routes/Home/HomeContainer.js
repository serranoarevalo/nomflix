import React from "react";
import HomePresenter from "./HomePresenter";
import { movies } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    error: null,
    popular: null,
    upcoming: null,
    nowPlaying: null
  };

  componentDidMount = async () => {
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
      this.setState({
        popular,
        upcoming,
        nowPlaying
      });
    } catch {
      this.setState({
        error: "Could not get movies"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { loading, error, popular, upcoming, nowPlaying } = this.state;
    return (
      <HomePresenter
        loading={loading}
        error={error}
        popular={popular}
        upcoming={upcoming}
        nowPlaying={nowPlaying}
      />
    );
  }
}
