import { configureStore } from '@reduxjs/toolkit'
import { costumerReducer,serviceReducer,storeReducer,invoiceItemsReducer,allCetegurytypesReducer } from './Slice'

export const store = configureStore({
  reducer: {
    costomer:costumerReducer,
    service:serviceReducer,
    store:storeReducer,
    invoiceItems:invoiceItemsReducer,
    categury:allCetegurytypesReducer,
  },
})