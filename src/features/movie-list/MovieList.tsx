import React, { PropsWithChildren } from "react";
import { MovieItem } from "../../types";
import MovieImage from "../movie/fields/MovieImage";
import MovieRating from "../movie/fields/MovieRating";
import MovieTitle from "../movie/fields/MovieTitle";
import MovieUrl from "../movie/fields/MovieUrl";
import MovieYear from "../movie/fields/MovieYear";
import MovieCell from "../movie/MovieCell";
import MovieRow from "../movie/MovieRow";

const MovieList: React.FC<PropsWithChildren<{ movies?: MovieItem[] }>> = props => (
    <div className="movie-list">
        {props.movies?.map(movie => {
            return (<MovieRow key={movie.title}>
                    <MovieCell>
                        <MovieTitle title={movie.title}/>
                        <MovieYear year={movie.year}/>
                        <MovieRating rating={movie.rate}/>
                        <MovieUrl url={movie.url}/>
                        <MovieImage src={movie.imgUrl}/>
                    </MovieCell>
            </MovieRow>);
        })}
    </div>
);

export default MovieList;