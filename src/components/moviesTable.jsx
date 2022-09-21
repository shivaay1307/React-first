import { Link } from "react-router-dom";
import React, { Component } from "react";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: movie =>
        <Link to={`/movies/${movie._id}`}>
          {movie.title}
        </Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "year", label: "Year" },
    { path: "director", label: "Director" },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
