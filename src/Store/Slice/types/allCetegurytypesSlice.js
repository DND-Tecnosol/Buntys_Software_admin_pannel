import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRoutes from '../../../Constants/apiRoutes';
import axios from 'axios';

export const fetchserviceCetegury = createAsyncThunk(
    'serviceCetegury/',
    async () => {
      const response = await axios(apiRoutes.Servicetype).then((e)=>e.data.servicetype)
      console.log(response);
      return response
    }
  )

  export const fetchcostomerCetegury = createAsyncThunk(
    'costomerCetegury/',
    async () => {
      const response = await axios(apiRoutes.costomerType).then((e)=>e.data.costumertype)
      console.log(response);
      return response
    }
  )
//   export const fetchinvoiceCetegury = createAsyncThunk(
//     'invoiceCetegury/',
//     async () => {
//       const response = await axios(apiRoutes.).then((e)=>e.data)
//       console.log(response);
//       return response
//     }
//   )
//   export const fetchproductCetegury = createAsyncThunk(
//     'productCetegury/',
//     async () => {
//       const response = await axios(apiRoutes.).then((e)=>e.data)
//       console.log(response);
//       return response
//     }
//   )
  export const fetchstuffCetegury = createAsyncThunk(
    'stuffCetegury/',
    async () => {
      const response = await axios(apiRoutes.stufftype).then((e)=>e.data.stafftype)
      console.log(response);
      return response
    }
  )
  

const initialState = {
    serviceCetegury:[],
    costomerCetegury:[],
    invoiceCetegury:[],
    productCetegury:[],
    stuffCetegury:[],
}

const allCetegurytypesSlice = createSlice({
  name: "Categury",
  initialState,
  reducers: {
     addServiceType:(state,action)=> void(state.serviceCetegury=action.payload),
     addcostomerCetegury:(state,action)=> void(state.costomerCetegury=action.payload),
     addinvoiceCetegury:(state,action)=> void(state.invoiceCetegury=action.payload),
     addproductCetegury:(state,action)=> void(state.productCetegury=action.payload),
     addstuffCetegury:(state,action)=> void(state.stuffCetegury=action.payload)
  },
  extraReducers:{
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchserviceCetegury.fulfilled]:(state, action) => void(state.serviceCetegury=action.payload),
    [fetchcostomerCetegury.fulfilled]:(state, action) => void(state.costomerCetegury=action.payload),
    [fetchstuffCetegury.fulfilled]:(state, action) => void(state.stuffCetegury=action.payload)
  },
});

export const {addServiceType,addcostomerCetegury,addinvoiceCetegury,addproductCetegury,addstuffCetegury} = allCetegurytypesSlice.actions

export default allCetegurytypesSlice.reducer