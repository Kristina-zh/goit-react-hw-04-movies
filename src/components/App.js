import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
// import HomePage from '../pages/HomePage/HomePage';
// import MoviesPage from '../pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import Navigation from './Navigation/Navigation';
import Loader from './Loader/Loader';
import routes from '../routes';

const AsyncHomePage = Loadable({
  loader: () =>
    import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
  loading: Loader,
  timeOut: 2000,
  pathDelay: 300,
});

const AsyncMoviesPage = Loadable({
  loader: () =>
    import(
      '../pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */
    ),
  loading: Loader,
});

const AsyncMovieDetailsPage = Loadable({
  loader: () =>
    import(
      '../pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */
    ),
  loading: Loader,
});

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path={routes.HOME} exact component={AsyncHomePage} />
        <Route path={routes.MOVIE_DETAILS} component={AsyncMovieDetailsPage} />
        <Route path={routes.MOVIES} component={AsyncMoviesPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
