import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRoutes,{appAxios as axios} from '../../../Constants/apiRoutes';


export const fetchAppoitment = createAsyncThunk(
    'appoitment/',
    async () => {
      const response = await axios.get(apiRoutes.appointment).then((e)=>e.data.appoitment)
      console.log(response);
      return response
    }
  )

const initialState = {
  appoitment:[]
}

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    addAppoitment:(state,action)=>{
          state.appoitment=action.payload
    }
  },
  extraReducers:{
    [fetchAppoitment.fulfilled]:(state, action) => {
      state.appoitment=action.payload
  },
  }
});

export const {addAppoitment} = appointmentSlice.actions

export default appointmentSlice.reducer