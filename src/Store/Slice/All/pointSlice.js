import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRoutes, { appAxios as axios } from '../../../Constants/apiRoutes';


export const fetchPoint = createAsyncThunk(
  'point/',
  async () => {
    // const response = await axios(apiRoutes.store).then((e)=>e.data.Store)
    const response = await axios.get(apiRoutes.points).then((e) => e.data.points)
    console.log("response");
    console.log(response);
    return response
  }
)

const initialState = {
  points: [] 
}
const pointSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    addStore: (state, action) => void (state.store = action.payload),
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchPoint.fulfilled]: (state, action) => void (state.points = action.payload),
  },
});

export const { addStore } = pointSlice.actions

export default pointSlice.reducer