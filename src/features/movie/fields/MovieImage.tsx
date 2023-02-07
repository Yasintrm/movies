import React, { PropsWithChildren } from "react";

const MovieImage: React.FC<PropsWithChildren<{src?: string}>> = props => {
    return (
        <div className="movie-image">
            <img src={props.src}  width="100" height="180" /> 
        </div>
    )
};

export default MovieImage;