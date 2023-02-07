import React, { PropsWithChildren } from "react";

const MovieUrl: React.FC<PropsWithChildren<{url?: string}>> = props => {
    return (
        <div className="movie-url">
            {props.url}
        </div>
    )
};

export default MovieUrl;