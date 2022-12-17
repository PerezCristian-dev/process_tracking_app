import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import {processSlice} from './slices/process/'

export const store = configureStore({
  reducer: {
    process: processSlice.reducer,
  },
})