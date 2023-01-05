import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRoutes,{appAxios as axios} from '../../../Constants/apiRoutes';


export const fetchStore = createAsyncThunk(
    'store/',
    async () => {
      // const response = await axios(apiRoutes.store).then((e)=>e.data.Store)
      const response= await axios.get("http://192.168.29.106:8000/api/test").then((e)=>e.data.Store)
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
  reducers: {
    addStore:(state,action)=>void(state.store=action.payload),
  },
  extraReducers:{
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchStore.fulfilled]:(state, action) => void(state.store=action.payload)
  },
});

export const {addStore} = storeSlice.actions

export default storeSlice.reducer