import React, { PropsWithChildren } from "react";

const MovieRating: React.FC<PropsWithChildren<{rating?: number}>> = props => {
    return (
        <div className="movie-title">
            {props.rating}
        </div>
    )
};

export default MovieRating;