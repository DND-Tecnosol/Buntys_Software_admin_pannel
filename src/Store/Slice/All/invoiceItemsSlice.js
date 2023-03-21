import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data:{
    client_id:0,
    totale:0,
    miNtotale:0,
    
    benifits:0,
    discount_is:false,
    reward_point_readeem:false,
    discount_is:false,
    vaocher:false,

    service:[],
    product:[],
    pkg:[],
    createpkg:[],
    hairweg:[],
    hairExtention:[],
    hairWegRepair:[],

    serviceTotale:0,
    pkgTotale:0,
    hairwegTotale:0,
    hairExtentionTotale:0,

    gst:false,
    appointment:true,
    gst:0,
  }
}

const createPkg={
  pkgName:" ",
  pkgTotale:0,
  pkgDiscount:0,
  pkgService:[],
}

const serviceInvoiceSchema={
  serviceId: null,
  servicePrice: 0,
  serviceMinPrice: 0,
  serviceTotalePrice: 0,
  staffId: 0,
  costomerId: 0,
  serviceQty: 1,
  serviceDisc: 0,
}

const productInvoiceSchema={
  productId: null,
  productPrice: 0,
  productTotalePrice: 0,
  staffId: 0,
  costomerId: 0,
  productQty: 1,
  // productDisc: 0,
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
      state.data.service[action.payload.key].serviceMinPrice=action.payload.minprice;
      state.data.service[action.payload.key].serviceTotalePrice=state.data.service[action.payload.key].servicePrice*state.data.service[action.payload.key].serviceQty;
    },
    changeServiceStaff:(state,action)=>{
      state.data.service[action.payload.key].staffId=action.payload.staffId;
    },
    changeServiceQty:(state,action)=>{
      state.data.service[action.payload.key].serviceQty=action.payload.value;
      state.data.service[action.payload.key].serviceTotalePrice=Number(action.payload.value)*(state.data.service[action.payload.key].servicePrice -(state.data.service[action.payload.key].servicePrice *(state.data.service[action.payload.key].serviceDisc / 100)));
    },
    changeServiceDisc:(state,action)=>{
      const checkMinPrice=state.data.service[action.payload.key].servicePrice-(state.data.service[action.payload.key].servicePrice * (Number(action.payload.value) / 100));

      if (!(checkMinPrice > state.data.service[action.payload.key].serviceMinPrice)) {
        state.data.service[action.payload.key].serviceDisc= 0;
         state.data.service[action.payload.key].serviceTotalePrice= state.data.service[action.payload.key].serviceQty * (state.data.service[action.payload.key].servicePrice-(state.data.service[action.payload.key].servicePrice * (Number(0) / 100)));
        
      }else{
        state.data.service[action.payload.key].serviceDisc= action.payload.value;
        state.data.service[action.payload.key].serviceTotalePrice= state.data.service[action.payload.key].serviceQty * (state.data.service[action.payload.key].servicePrice-(state.data.service[action.payload.key].servicePrice * (Number(action.payload.value) / 100)))
      }
    },

    remPoduct:(state,action)=>{
      state.data.product.splice(state.data.product.findIndex(a => a.productId === action.payload.id),1)
      state.totale=state.data.totale-=Number(action.payload.price)
    },
    addPoduct:(state,action)=>{
      state.data.product.push(productInvoiceSchema)
    },
    changePoduct:(state,action)=>{
      state.data.product[action.payload.key].productId=action.payload.id;
      state.data.product[action.payload.key].productPrice=action.payload.price;
      state.data.product[action.payload.key].productTotalePrice=state.data.product[action.payload.key].productPrice*state.data.product[action.payload.key].productQty;
    },
    changePoductStaff:(state,action)=>{
      console.log(action.payload);
      state.data.product[action.payload.key].staffId=action.payload.staffId;
    },
    changePoductQty:(state,action)=>{
      state.data.product[action.payload.key].productQty=action.payload.value;
      state.data.product[action.payload.key].productTotalePrice=Number(action.payload.value)*state.data.product[action.payload.key].productPrice;
    },
    setTotaleValue:(state,action)=>void(state.data.totale=action.payload)
  }
});

 
 export const {addItems,remItems,setTotaleValue,remPoduct,allItemsRem,addPoduct ,changePoduct ,changePoductStaff ,changePoductQty , remService,addService,changeService,changeServiceStaff,changeServiceQty,changeServiceDisc} = invoiceItemsSlice.actions

export default invoiceItemsSlice.reducer
