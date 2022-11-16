import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[],

}

const invoiceItemsSlice = createSlice({
  name: "invoiceItems",
  initialState,
  reducers: {
    addItems:(state,action)=>void(state.items.push(action.payload)),
    addItemsValue:(state,action)=>void(state.items[action.payload.id]=action.payload)
  }
});

export const {addItems,addItemsValue} = invoiceItemsSlice.actions

export default invoiceItemsSlice.reducer