import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
    name: 'config',
    initialState: {
        lang: 'en'

    },
    reducers: { 
        ChangeLanguage: (state, action) =>{
            state.lang = action.payload;
        }
    }
})

export const {ChangeLanguage} = ConfigSlice.actions;
export default ConfigSlice.reducer;