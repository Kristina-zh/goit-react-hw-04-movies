import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../services/api';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { movies } = this.state;
    this.fetchMovie(movies);
  }

  fetchMovie = () => {
    API.popularMovies().then(res => {
      this.setState({ movies: res.data.results });
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2>Trending today</h2>
        <ul>
          {movies.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.title || el.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
