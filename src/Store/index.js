import { configureStore } from '@reduxjs/toolkit'
import {appointmentReducer,smsTemplateReducer,campignReducer,productReducer, msgReducer, invoiceReducer,refreshReducer,themeReducer,authReducer,costumerReducer,serviceReducer,storeReducer,invoiceItemsReducer,allCetegurytypesReducer,stuffReducer } from './Slice'

export const store = configureStore({
  reducer: {
    costomer:costumerReducer,
    stuff:stuffReducer,
    service:serviceReducer,
    store:storeReducer,
    invoiceItems:invoiceItemsReducer,
    categury:allCetegurytypesReducer,
    auth:authReducer,
    theme:themeReducer,
    refresh:refreshReducer,
    msg:msgReducer,
    invoice:invoiceReducer,
    appointment:appointmentReducer,
    product:productReducer,
    campign:campignReducer,
    smsTemp:smsTemplateReducer,
  },
})