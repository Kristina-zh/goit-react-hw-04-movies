import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../../services/api';
import SearchBar from '../../components/SearchBar/SearchBar';

export default class MoviesPage extends Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    location: PropTypes.shape({}).isRequired,
  };

  state = {
    movies: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const currentSearch = new URLSearchParams(location.search).get('search');
    console.log(location);

    if (!currentSearch) {
      return;
    }

    this.fetchFilms(currentSearch);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = new URLSearchParams(prevProps.location.search).get(
      'search',
    );
    const { location } = this.props;
    const currentSearch = new URLSearchParams(location.search).get('search');

    if (prevSearch && prevSearch === currentSearch) {
      return;
    }

    this.fetchFilms(currentSearch);
  }

  fetchFilms = query => {
    API.searchMovies(query).then(res =>
      this.setState({ movies: res.data.results }),
    );
  };

  onSearchSubmit = query => {
    const { history, location } = this.props;
    history.push({
      ...location,
      search: `?search=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ul>
          {movies.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.name || el.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
