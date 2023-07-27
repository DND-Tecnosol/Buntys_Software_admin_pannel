import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRoutes, { appAxios as axios } from '../../../Constants/apiRoutes';


export const fetchCampign = createAsyncThunk(
    'Campign/',
    async () => {
        const response = await axios.get(apiRoutes.CampignData).then((e) => e.data)
        console.log(response);
        return response
    }
)

const initialState = {
    offers: [],
    targetAudianceOffers: [],
    vaucher: [],
    wish: []
}




const CampignSlice = createSlice({
    name: "CampignResource",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCampign.fulfilled]: (state, action) => {
            state.offers = action.payload.offers
            state.targetAudianceOffers = action.payload.targetaudience
            state.vaucher = action.payload.voucher
            state.wish = action.payload.wishoffers
        }
    }
});

export const { } = CampignSlice.actions

export default CampignSlice.reducer