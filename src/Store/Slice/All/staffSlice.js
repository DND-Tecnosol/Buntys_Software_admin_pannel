import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRoutes,{appAxios as axios} from '../../../Constants/apiRoutes';



export const fetchStaff = createAsyncThunk(
    'staff/',
    async () => {
      const response = await axios(apiRoutes.stuff).then((e)=>e.data.staff)
      // console.log(response);
      return response
    }
  )

const initialState = {
    staff:[]
}

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    addStuff:(state,action)=>void(state.services=action.payload)
  },
  extraReducers:{
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchStaff.fulfilled]:(state, action) => void(state.staff=action.payload),
  },
});

export const {addStuff} = staffSlice.actions

export default staffSlice.reducer