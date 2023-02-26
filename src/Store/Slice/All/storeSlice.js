import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRoutes, { appAxios as axios } from '../../../Constants/apiRoutes';

export const fetchCity = createAsyncThunk(
  'city/',
  async () => {
    // const response = await axios(apiRoutes.store).then((e)=>e.data.Store)
    const response = await axios.get(apiRoutes.city).then((e) => e.data.city)
    // console.log(response);
    return response
  }
)

export const fetchStore = createAsyncThunk(
  'store/',
  async () => {
    // const response = await axios(apiRoutes.store).then((e)=>e.data.Store)
    const response = await axios.get(apiRoutes.store).then((e) => e.data.Store)
    // console.log(response);
    return response
  }
)

export const fetchStorenotification = createAsyncThunk(
  'notification/',
  async () => {
    // const response = await axios(apiRoutes.store).then((e)=>e.data.Store)
    const response = await axios.get(apiRoutes.notification).then((e) => e.data.storenotyfication)
    // console.log(response);
    return response
  }
)

export const fetchStorenotificationcatygury = createAsyncThunk(
  'notificationcatygury/',
  async () => {
    // const response = await axios(apiRoutes.store).then((e)=>e.data.Store)
    const response = await axios.get(apiRoutes.notificationcatygury).then((e) => e.data.notyficationcategury)
    // console.log(response);
    return response
  }
)

export const fetchStoretime = createAsyncThunk(
  'time/',
  async () => {
    // const response = await axios(apiRoutes.store).then((e)=>e.data.Store)
    const response = await axios.get(apiRoutes.notificationcatygury).then((e) => e.data.storetiming)
    // console.log(response);
    return response
  }
)

export const fetchStoreclosingdate = createAsyncThunk(
  'closingdate/',
  async () => {
    // const response = await axios(apiRoutes.store).then((e)=>e.data.Store)
    const response = await axios.get(apiRoutes.closingdate).then((e) => e.data.closedate)
    // console.log(response);
    return response
  }
)
const initialState = {
  store: [],
  city: [],
  notification: [],
  notificationcatygury: [],
  closingdate: [],
  time: [],
}

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addStore: (state, action) => void (state.store = action.payload),
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchStore.fulfilled]: (state, action) => void (state.store = action.payload),
    [fetchCity.fulfilled]: (state, action) => void (state.city = action.payload),
    [fetchStorenotification.fulfilled]: (state, action) => void (state.notification = action.payload),
    [fetchStorenotificationcatygury.fulfilled]: (state, action) => void (state.notificationcatygury = action.payload),
    [fetchStoreclosingdate.fulfilled]: (state, action) => void (state.closingdate = action.payload),
    [fetchStoretime.fulfilled]: (state, action) => void (state.time = action.payload),
  },
});

export const { addStore } = storeSlice.actions

export default storeSlice.reducer