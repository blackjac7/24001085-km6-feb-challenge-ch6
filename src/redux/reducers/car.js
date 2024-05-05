import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    car: null,
};

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload;
        },
        setCar: (state, action) => {
            state.car = action.payload;
        },
    },
});

export const { setCars, setCar } = carSlice.actions;

export default carSlice.reducer;
