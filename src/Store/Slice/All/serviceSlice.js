import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRoutes,{appAxios as axios} from '../../../Constants/apiRoutes';


export const fetchServices = createAsyncThunk(
    'services/',
    async () => {
      const response = await axios(apiRoutes.Service).then((e)=>e.data.service)
      // console.log(response);
      return response
    }
  )
const initialState = {
    services:[]
}

const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    addService:(state,action)=>void(state.services=action.payload),
  },
  extraReducers:{
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchServices.fulfilled]:(state, action) => void(state.service=action.payload),
  },
});

export const {addService} = serviceSlice.actions

export default serviceSlice.reducer