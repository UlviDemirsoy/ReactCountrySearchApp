import { createSlice } from "@reduxjs/toolkit"



const initialStateValue = { name: ""};


export const countrySlice = createSlice({

    name: "country",
    initialState: {value:initialStateValue},
    reducers: {
        press: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const {press} = countrySlice.actions; 
export default countrySlice.reducer;
