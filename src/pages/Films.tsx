import React from "react";
import { useAppSelector, 
    useAppDispatch } from "../global/RootReducer";
import { API } from "../global/FetchAPI";

export const Films = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const error = useAppSelector((state) => state.films.error);
    const loading = useAppSelector((state) => state.films.loading);
    const films = useAppSelector((state) => state.films.films);
    const filmText: string = "Hunger Games";

    React.useEffect(() => {
        dispatch(API.getFilms(filmText));
    }, [dispatch]);

    if (error) return <h1>Error...{error.message}</h1>;
    if (loading) return <h1>Loading...</h1>;    

    return (
        <React.Fragment>
            {films.map((film) => (
                <main key={film.imdbID}>
                    <h1>{film.Title}</h1>
                    <p>Year: {film.Year}</p>
                    <img 
                        src={film.Poster} 
                        alt={film.Title} 
                    />
                </main>
            ))}
        </React.Fragment>
    );
};


