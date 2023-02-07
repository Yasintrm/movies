import React, { PropsWithChildren } from "react";

const MovieCell: React.FC<PropsWithChildren> = props => {
    return (
        <div className="movie-cell">
            {props.children}
        </div>
    );
};

export default MovieCell;