import React, { PropsWithChildren } from "react";

const MovieTitle: React.FC<PropsWithChildren<{title?: string}>> = props => {
    return (
        <div className="movie-title">
            {props.title}
        </div>
    )
};

export default MovieTitle;