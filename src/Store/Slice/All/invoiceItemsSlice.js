import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[],
    totale:0,
    miNtotale:0

}

const invoiceItemsSlice = createSlice({
  name: "invoiceItems",
  initialState,
  reducers: {
    allItemsRem:(state,action)=>{
      state.items=[]
      state.totale=0
    },
    remItems:(state,action)=>{
      state.items.splice(state.items.findIndex(a => state.items.serviceId === action.payload.id),1)
      state.totale=state.totale-=action.payload.totale
    },
    addItems:(state,action)=>{
      state.items.push(action.payload)
      state.totale=state.totale+=action.payload.totale
      state.miNtotale=state.miNtotale+=action.payload.miNtotale
    },
    addItemsValue:(state,action)=>void(state.items[action.payload.id]=action.payload)
  }
});

export const {addItems,remItems,addItemsValue,allItemsRem} = invoiceItemsSlice.actions

export default invoiceItemsSlice.reducer