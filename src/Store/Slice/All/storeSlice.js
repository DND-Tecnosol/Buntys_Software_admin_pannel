import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRoutes from '../../../Constants/apiRoutes';
import axios from 'axios';

export const fetchStore = createAsyncThunk(
    'store/',
    async () => {
      const response = await axios(apiRoutes.store).then((e)=>e.data.Store)
      // console.log(response);
      return response
    }
  )
const initialState = {
    store:[]
}

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers:{
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchStore.fulfilled]:(state, action) => void(state.store=action.payload)
  },
});

// export const {} = storeSlice.actions

export default storeSlice.reducer