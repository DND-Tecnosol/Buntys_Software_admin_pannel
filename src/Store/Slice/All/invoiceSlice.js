import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRoutes,{appAxios as axios} from '../../../Constants/apiRoutes';


export const fetchInvoice = createAsyncThunk(
    'invoice/',
    async () => {
      const response = await axios.post(apiRoutes.allinvoice).then((e)=>e.data)
      console.log(response);
      return response
    }
  )
const initialState = {
    invoice:[],
    invoiceTotle:0
}

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    addinvoice:(state,action)=>{
      state.invoice=action.payload.invoice
      state.invoiceTotle=action.payload.totle
}   
  },
  extraReducers:{
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchInvoice.fulfilled]:(state, action) => {
        state.invoice=action.payload.invoice
        state.invoiceTotle=action.payload.totle
    },
  },
});


export const {addinvoice} = invoiceSlice.actions

export default invoiceSlice.reducer