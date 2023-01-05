import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRoutes,{appAxios as axios} from '../../../Constants/apiRoutes';


export const fetchCostomer = createAsyncThunk(
    'costomer/',
    async () => {
      const response = await axios(apiRoutes.costomer).then((e)=>e.data.costumer)
      // console.log(response);
      return response
    }
  )

const initialState = {
    costomer:[]
}

const costumerSlice = createSlice({
  name: "costomer",
  initialState,
  reducers: {
    addCostomer:(state, action)=> {
        // console.log('m run');
        state.costomer=action.payload
    }
  },
  extraReducers:{
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchCostomer.fulfilled]:(state, action) => void(state.costomer=action.payload)
  },
});

export const {addCostomer} = costumerSlice.actions

export default costumerSlice.reducer