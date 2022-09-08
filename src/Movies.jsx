import React, { Component } from "react";
import { getMovies } from "./MovieDatabase";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

class Movies extends Component {
  state = {
    movies: getMovies(),
    // delAll: null
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState({ movies });
  };
  
  // handleAllDelete = (delAll) => {
  //   const movies = (this.state.movies = (this.setState.delAll));
  // }

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p> There are no movies</p>;
    return (
      <React.Fragment>
        <div className="counter">
        Showing {count} movies in the Movies Database.
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="p-6 fs-2 ">ID</th>
              <th className="p-6 fs-2">Title</th>
              <th className="p-6 fs-2">Year</th>
              <th className="p-6 fs-2">Genres</th>
              <th className="p-6 fs-2">Actors</th>
              <th>
                <button
                  type="button"
                  // onClick={() => this.handleAllDelete(delAll)}
                  class="btn btn-danger btn-sm"
                >
                  Delete All
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr className="contentEven" key={movie.id}>
                <td className="fs-6 p-6">{movie.id}</td>
                <td className="fs-6 p-6">{movie.title}</td>
                <td className="fs-6 p-6">{movie.year}</td>
                <td className="fs-6 p-6">{movie.genres}</td>
                <td className="fs-6 p-6">{movie.actors}</td>
                <td className="fs-6 p-6">
                  <button
                    type="button"
                    onClick={() => this.handleDelete(movie)}
                    class="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
