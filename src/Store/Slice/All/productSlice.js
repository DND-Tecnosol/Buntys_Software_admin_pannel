import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRoutes,{appAxios as axios} from '../../../Constants/apiRoutes';


export const fetchProduct = createAsyncThunk(
    'product/',
    async () => {
      const response = await axios(apiRoutes.product).then((e)=>e.data.product)
      console.log(response);
      return response
    }
  )
  export const fetchProductBrand = createAsyncThunk(
    'productBrand/',
    async () => {
      const response = await axios(apiRoutes.productbrand).then((e)=>e.data.brands)
      console.log(response);
      return response
    }
  )

  export const fetchProductCategury = createAsyncThunk(
    'productCategury/',
    async () => {
      const response = await axios(apiRoutes.producttype).then((e)=>e.data.producttypes)
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
        state.product=action.payload
      },
      [fetchProductBrand.fulfilled]:(state, action)=>{
        state.product_brand=action.payload
      },
      [fetchProductCategury.fulfilled]:(state, action)=>{
        state.product_categury=action.payload
      },
  }
});

export const {} = productSlice.actions

export default productSlice.reducer