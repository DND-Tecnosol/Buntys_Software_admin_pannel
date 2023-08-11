import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRoutes, { appAxios as axios } from '../../../Constants/apiRoutes';


export const fetchSmsTemp = createAsyncThunk(
    'SmsTemp/',
    async () => {
        const response = await axios(apiRoutes.SmsTemp).then((e) => e.data.smstemp)
        // console.log(response);
        return response
    }
)
const initialState = {
    smsTemp: []
}

const smsTemplateSlice = createSlice({
    name: 'smstemp',
    initialState,
    reducers: {},
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [fetchSmsTemp.fulfilled]: (state, action) => void (state.smsTemp = action.payload),
    },
});

export const {  } = smsTemplateSlice.actions

export default smsTemplateSlice.reducer