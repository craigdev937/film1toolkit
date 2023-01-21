export interface IFilm {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
};

export interface IFilmState {
    films: IFilm[],
    loading: boolean,
    error: Error | null
};




