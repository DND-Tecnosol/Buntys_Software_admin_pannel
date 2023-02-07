import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data:{
    totale:0,
    miNtotale:0,
    service:[],
    product:[],
    pkg:[],
    hairweg:[],
    hairExtention:[],
    hairWegRepair:[]
  }
}

const serviceInvoiceSchema={
  serviceId: null,
  servicePrice: 0,
  serviceTotalePrice: 0,
  staffId: 0,
  costomerId: 0,
  serviceQty: 1,
  serviceDisc: 0,
}

const invoiceItemsSlice = createSlice({
  name: "invoiceItems",
  initialState,
  reducers: {
    remItems:(state,action)=>{
      state.items.splice(state.items.findIndex(a => state.items.serviceId === action.payload.id),1)
      state.totale=state.totale-=action.payload.totale
    },
    allItemsRem:(state,action)=>{
      state.data.service=[]
      state.data.totale=0
    },


    remService:(state,action)=>{
      state.data.service.splice(state.data.service.findIndex(a => a.serviceId === action.payload.id),1)
      // state.totale=state.data.totale-=Number(action.payload.price)
    },
    addService:(state,action)=>{
      state.data.service.push(serviceInvoiceSchema)
    },
    changeService:(state,action)=>{
      state.data.service[action.payload.key].serviceId=action.payload.id;
      state.data.service[action.payload.key].servicePrice=action.payload.price;
      state.data.service[action.payload.key].serviceTotalePrice=state.data.service[action.payload.key].servicePrice*state.data.service[action.payload.key].serviceQty;
    },
    changeServiceStaff:(state,action)=>{
      state.data.service[action.payload.key].staffId=action.payload.staffId;
    },
    changeServiceQty:(state,action)=>{
      state.data.service[action.payload.key].serviceQty=(action.payload.value >= 1) ? action.payload.value : 1;
      state.data.service[action.payload.key].serviceTotalePrice=Number(action.payload.value)*(state.data.service[action.payload.key].servicePrice -(state.data.service[action.payload.key].servicePrice *(state.data.service[action.payload.key].serviceDisc / 100)));
    },
    changeServiceDisc:(state,action)=>{
      state.data.service[action.payload.key].serviceDisc= (action.payload.value >= 0) ? action.payload.value : 0;
      state.data.service[action.payload.key].serviceTotalePrice= state.data.service[action.payload.key].serviceQty * (state.data.service[action.payload.key].servicePrice-(state.data.service[action.payload.key].servicePrice * (Number(action.payload.value) / 100)))
    },


    setTotaleValue:(state,action)=>void(state.data.totale=action.payload)
  }
});

export const {addItems,remItems,setTotaleValue,allItemsRem,
  remService,addService,changeService,changeServiceStaff,changeServiceQty,changeServiceDisc} = invoiceItemsSlice.actions

export default invoiceItemsSlice.reducer