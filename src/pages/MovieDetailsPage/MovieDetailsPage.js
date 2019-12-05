import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import s from './MovieDetailsPage.module.css';
import * as API from '../../services/api';
// import routes from '../../routes';

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    cast: null,
    reviews: null,
  };

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = () => {
    const { match } = this.props;
    const { movieId } = match.params;
    API.searchExactMovies(movieId).then(res =>
      this.setState({ movie: res.data }),
    );
  };

  returnToPrevLoc = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;

    return (
      <div>
        <button
          className={s.button}
          type="button"
          onClick={this.returnToPrevLoc}
        >
          Go back
        </button>
        {movie && (
          <>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt=""
              />
              <h2>{movie.title}</h2>
              <p>User score: {movie.vote_average * 10}%</p>
              <p>Overview: {movie.overview}</p>
              <p>
                Genres:{' '}
                {movie.genres.reduce((acc, e) => `${acc} ${e.name}`, '')}
              </p>

              <h3>Additional information</h3>
              <ul>
                <li>
                  <Link to={`${match.url}/cast`}>Cast</Link>
                </li>
                <li>
                  <Link to={`${match.url}/reviews`}>Review</Link>
                </li>
              </ul>
            </div>
            <Switch>
              <Route path={`${match.path}/cast`} exact component={Cast} />
              <Route path={`${match.path}/reviews`} component={Reviews} />
            </Switch>
          </>
        )}
      </div>
    );
  }
}
