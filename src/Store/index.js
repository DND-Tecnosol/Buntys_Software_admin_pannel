import { configureStore } from '@reduxjs/toolkit'
import { costumerReducer,serviceReducer,storeReducer,invoiceItemsReducer,allCetegurytypesReducer,stuffReducer } from './Slice'

export const store = configureStore({
  reducer: {
    costomer:costumerReducer,
    stuff:stuffReducer,
    service:serviceReducer,
    store:storeReducer,
    invoiceItems:invoiceItemsReducer,
    categury:allCetegurytypesReducer,
  },
})