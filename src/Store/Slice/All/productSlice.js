import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRoutes,{appAxios as axios} from '../../../Constants/apiRoutes';


export const fetchProduct = createAsyncThunk(
    'product/',
    async () => {
      const response = await axios.post(apiRoutes.product).then((e)=>e.data)
      console.log(response);
      return response
    }
  )
  export const fetchProductBrand = createAsyncThunk(
    'productBrand/',
    async () => {
      const response = await axios.post(apiRoutes.productbrand).then((e)=>e.data)
      console.log(response);
      return response
    }
  )

  export const fetchProductCategury = createAsyncThunk(
    'productCategury/',
    async () => {
      const response = await axios.post(apiRoutes.producttype).then((e)=>e.data)
      console.log(response);
      return response
    }
  )
const initialState = {
    product:[],
    product_categury:[],
    product_brand:[],
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers:{
      [fetchProduct.fulfilled]:(state, action)=>{
        state.product=action.payload.product
      },
      [fetchProductBrand.fulfilled]:(state, action)=>{
        state.product=action.payload.brands
      },
      [fetchProductCategury.fulfilled]:(state, action)=>{
        state.product=action.payload.producttypes
      },
  }
});

export const {} = productSlice.actions

export default productSlice.reducer