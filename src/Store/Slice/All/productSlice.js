import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRoutes, { appAxios as axios } from '../../../Constants/apiRoutes';


export const fetchProduct = createAsyncThunk(
  'product/',
  async () => {
    const response = await axios(apiRoutes.product).then((e) => e.data.product)
    console.log(response);
    return response
  }
)

export const fetchProductBrand = createAsyncThunk(
  'productBrand/',
  async () => {
    const response = await axios(apiRoutes.productbrand).then((e) => e.data.brands)
    console.log(response);
    return response
  }
)

export const fetchProductCategury = createAsyncThunk(
  'productCategury/',
  async () => {
    const response = await axios(apiRoutes.producttype).then((e) => e.data.producttypes)
    console.log(response);
    return response
  }
)

export const fetchHairWegtype = createAsyncThunk(
  'hairwegtype/',
  async () => {
    const response = await axios(apiRoutes.hairwegtype).then((e) => e.data.wegcategury)
    console.log(response);
    return response
  }
)

export const fetchHairWeg = createAsyncThunk(
  'hairweg/',
  async () => {
    const response = await axios(apiRoutes.hairweg).then((e) => e.data.hairweg)
    console.log(response);
    return response
  }
)

export const fetchHairExtention = createAsyncThunk(
  'hairExtention/',
  async () => {
    const response = await axios(apiRoutes.hairextention).then((e) => e.data.hairweg)
    console.log(response);
    return response
  }
)

export const fetchHairExtentionType = createAsyncThunk(
  'hairExtentiontype/',
  async () => {
    const response = await axios(apiRoutes.hairextentiontype).then((e) => e.data.hairextentioncategury)
    console.log(response);
    return response
  }
)

export const fetchHairPatch = createAsyncThunk(
  'hairPatch/',
  async () => {
    const response = await axios(apiRoutes.hairpatch).then((e) => e.data.hairweg)
    console.log(response);
    return response
  }
)

export const fetchHairPatchtype = createAsyncThunk(
  'hairPatchtype/',
  async () => {
    const response = await axios(apiRoutes.hairpatchtype).then((e) => e.data.hairpatchtype)
    console.log(response);
    return response
  }
)

const initialState = {
  product: [],
  product_categury: [],
  product_brand: [],
  hairwegtype: [],
  hairweg: [],
  hairextentiontype: [],
  hairextention: [],
  hairPatchtype: [],
  hairPatch: [],
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProduct.fulfilled]: (state, action) => {
      state.product = action.payload
    },
    [fetchProductBrand.fulfilled]: (state, action) => {
      state.product_brand = action.payload
    },
    [fetchProductCategury.fulfilled]: (state, action) => {
      state.product_categury = action.payload
    },
    [fetchHairWegtype.fulfilled]: (state, action) => {
      state.hairwegtype = action.payload
    },
    [fetchHairWeg.fulfilled]: (state, action) => {
      state.hairweg = action.payload
    },
    [fetchHairExtention.fulfilled]: (state, action) => {
      state.hairextention = action.payload
    },
    [fetchHairExtentionType.fulfilled]: (state, action) => {
      state.hairextentiontype = action.payload
    },
    [fetchHairPatch.fulfilled]: (state, action) => {
      state.hairPatch = action.payload
    },
    [fetchHairPatchtype.fulfilled]: (state, action) => {
      state.hairPatchtype = action.payload
    },
  }
});

export const { } = productSlice.actions

export default productSlice.reducer