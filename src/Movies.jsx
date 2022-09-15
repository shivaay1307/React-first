import React, { Component } from "react";
import { getMovies } from "./MovieDatabase";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./components/Pagination";
import { paginate } from './components/Paginate';
import "./styles.css";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 15,
    currentPage: 1
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState({ movies });
  }
  // handleClear = () => {
  //   let delAll = ('');
  //   this.setState(delAll);
  // }
  handlePageChange = page => {
    this.setState({ currentPage: page });
  }

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies} = this.state;

    if (count === 0) return <p> There are no movies</p>

    const movies = paginate(allMovies, currentPage, pageSize);

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
                {/* <button
                  type="button"
                  onClick={() => this.handleClear()}
                  class="btn btn-danger btn-sm"
                >
                  Delete All
                </button>  */}
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
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
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr> 
            ))}
          </tbody>
        </table>
        <Pagination
          className="page"
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange} />
      </React.Fragment>
    );
  }
}

export default Movies;
