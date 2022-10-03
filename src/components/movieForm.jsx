import React from 'react';
import Joi from "joi-browser";
import Form from './common/form';
import { getMovie, getGenres, saveMovie } from "../MovieDatabase";
import { useParams } from 'react-router-dom';

class MovieForm extends Form {
    state = {
        data: { title: "", genreId: "", year: "", director: "" },
        genre: [],
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label('Title'),
        genreId: Joi.string().required().label('Genre'),
        year: Joi.string().required().min(1900).max(2022).label('Year'),
        director: Joi.string().required().label('Director')
    };

    componentDidMount() {
        const genres = getGenres();
        this.setState({ genres });

        const {movieId} = this.props.params;
        if (movieId === 'new') return;

        const movie = getMovie(movieId);
        if (!movie) return this.props.history.replace("/notFound");

        this.setState({ data: this.mapToViewModel(movie) });
    };

    mapToViewModel(movie) { 
        return {
            _id: movie.id,
            title: movie.title,
            genre: movie.genre._id,
            year: movie.genre,
            director: movie.director
        };
    };

    doSubmit = e => {
        saveMovie(this.state.data)
        this.props.history.push("/movies");
    };

    render() {
        return (
            <div className='container'>
                <h3>Movie Form</h3>
                <form className='login bg-dark text-light' onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderInput("genre", "Genre")}
                    {this.renderInput("year", "Year")}
                    {this.renderInput("director", "Director" )}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}

export default (props) => (
    <MovieForm
        {...props}
        params={useParams()}
    />
 );