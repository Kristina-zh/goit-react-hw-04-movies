import React, { Component } from 'react';
import * as API from '../../services/api';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    this.fetchMovie(movieId);
  }

  fetchMovie = id => {
    API.getReviews(id).then(res => {
      this.setState({ reviews: res.data.results });
    });
  };

  render() {
    const { reviews } = this.state;
    return (
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(el => (
              <li key={el.id}>
                <p>{el.author}</p>
                <p>{el.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Sorry</p>
        )}
      </div>
    );
  }
}
