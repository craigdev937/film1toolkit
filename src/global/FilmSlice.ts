import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";
import { IFilm, IFilmState } from "../models/Interfaces";

const initialState: IFilmState = {
    films: [],
    loading: false,
    error: null
};

const FilmSlice = createSlice({
    name: "films",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(API.getFilms.rejected.toString(), 
        (state, action: PayloadAction<IFilmState>) => {
            state.loading = false,
            state.error = action.payload.error
        }),
        builder.addCase(API.getFilms.pending, (state) => {
            state.loading = true,
            state.error = null
        }),
        builder.addCase(API.getFilms.fulfilled, 
        (state, action: PayloadAction<IFilm[]>) => {
            state.loading = false,
            state.error = null,
            state.films = [...action.payload]
        })
    }
});

export const FilmReducer = FilmSlice.reducer;


