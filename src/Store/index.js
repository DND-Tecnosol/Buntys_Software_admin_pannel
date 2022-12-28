import { configureStore } from '@reduxjs/toolkit'
import { msgReducer, refreshReducer,themeReducer,authReducer,costumerReducer,serviceReducer,storeReducer,invoiceItemsReducer,allCetegurytypesReducer,stuffReducer } from './Slice'

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
    msg:msgReducer
  },
})