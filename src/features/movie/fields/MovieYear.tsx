import React, { PropsWithChildren } from "react";

const MovieYear: React.FC<PropsWithChildren<{year?: number}>> = props => {
    return (
        <div className="movie-year">
            {props.year}
        </div>
    )
};

export default MovieYear;