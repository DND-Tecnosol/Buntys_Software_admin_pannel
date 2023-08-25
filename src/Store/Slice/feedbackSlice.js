import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiRoutes, { appAxios as axios } from '../../Constants/apiRoutes';

export const fetchFeedback = createAsyncThunk(
    'feedback/',
    async () => {
        const response = await axios(apiRoutes.feedback).then((e) => e.data.feedback)
        console.log(response);
        return response
    }
)
const initialState = {
    feedbackFomemCreate: {
        feedbackTitle: '',
        feedbackForm: {},
        formType:false,
    },
    feedbackFomemData: [],
}

const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {
        addFeedbackTitle: (state, action) => {
            state.feedbackFomemCreate.feedbackTitle = action.payload
        },
        changeFeedbackFormType: (state, action) => {
            state.feedbackFomemCreate.formType = action.payload
        },
        addFeedbackFormData: (state, action) => {
            state.feedbackFomemCreate.feedbackForm = action.payload
        },
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [fetchFeedback.fulfilled]: (state, action) => void (state.feedbackFomemData = action.payload)
    },
});

export const { addFeedbackTitle, changeFeedbackFormType, addFeedbackFormData, } = feedbackSlice.actions

export default feedbackSlice.reducer

