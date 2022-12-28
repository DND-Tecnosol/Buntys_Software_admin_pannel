import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    refresh:0
}

const refresh = createSlice({
  name: 'refresh',
  initialState,
  reducers: {
    refreshStore:(state,actions)=>{
        state.refresh=++state.refresh
    }
  }
});

export const {refreshStore} = refresh.actions

export default refresh.reducer