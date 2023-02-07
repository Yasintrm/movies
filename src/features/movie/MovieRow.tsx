import React, { PropsWithChildren } from "react";

const MovieRow: React.FC<PropsWithChildren> = props => {
    return (
        <div className="movie-row">
            {props.children}
        </div>
    );
};

export default MovieRow;