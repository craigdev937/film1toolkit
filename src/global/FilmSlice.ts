import { createSlice } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";

const FilmSlice = createSlice({
    name: "films",
    initialState: {},
    reducers: {}
});

export const FilmReducer = FilmSlice.reducer;


