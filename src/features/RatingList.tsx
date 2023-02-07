import React, { PropsWithChildren, useMemo } from "react";
import { MovieItem } from "../types";

const RatingList: React.FC<PropsWithChildren<{list: MovieItem[]}>> = props => {
    const grouped = useMemo(() => {
        const items = props.list.reduce((state, item) => {
            if (!item.rate) {
                return state;
            }

            state[item.rate] = state[item.rate] || [];
            state[item.rate].push(item);
            return state;

        }, {} as Record<string, MovieItem[]>);

        return {
            keys: Object.keys(items).sort((a: string, b: string) => parseFloat(b) - parseFloat(a)),
            items
        };

    }, [props.list]);

    return (
        <div className="rating-list">
            {
                grouped.keys.map((key) => {
                    return (<fieldset key={key}>
                            <legend>{key} - {grouped.items[key].length} movies</legend>
                        {
                            grouped.items[key].sort((a, b) => (a.year || 0) - (b.year ||0)) .map(movie => {
                                return (
                                    <a style={{display: "block"}} href={movie.url} key={movie.url}>
                                        {movie.year} - {movie.title}
                                    </a>
                                )
                            })
                        }
                    </fieldset>)
                })
            }
        </div>
    );
};

export default RatingList;