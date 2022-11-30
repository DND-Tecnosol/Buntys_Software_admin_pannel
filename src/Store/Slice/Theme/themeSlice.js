import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logo:true
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    logoChange:(state,action)=>{
        state.logo=!state.logo
    }
  }
});

export const {logoChange} = themeSlice.actions

export default themeSlice.reducer