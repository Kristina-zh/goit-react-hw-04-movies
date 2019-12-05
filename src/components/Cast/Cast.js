import React, { Component } from 'react';
import * as API from '../../services/api';

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    this.fetchMovie(movieId);
  }

  fetchMovie = id => {
    API.getCredits(id).then(res => {
      this.setState({ cast: res.data.cast });
    });
  };

  render() {
    const { cast } = this.state;
    return (
      <div>
        <ul>
          {cast.map(el => (
            <li key={el.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${el.profile_path}`}
                alt=""
              />
              <p>{el.name}</p>
              <p>{el.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
