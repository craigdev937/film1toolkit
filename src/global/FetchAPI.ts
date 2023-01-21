import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../config/MovieApiKey";

const URL = "https://www.omdbapi.com";
class FetchClass {
    getFilms = createAsyncThunk("films/getFilms", 
    async (query: string) => {
        const res: Response = await fetch(
            `${URL}?apiKey=${APIKey}&s=${query}&type=movie`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        console.log(data);
        return [...data];
    });

    fetchShows = createAsyncThunk("shows/fetchShows",
    async (query: string) => {
        const res: Response = await fetch(
            `${URL}?apiKey=${APIKey}&s=${query}&type=series`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        console.log(data);
        return [...data];
    });
};

export const API: FetchClass  = new FetchClass();


