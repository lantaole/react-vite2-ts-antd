// Index.jsx (STORE)
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import common from './slices/common.slice'

export const store = configureStore({
  reducer: {
    common: common
  },
})
export type RootState = ReturnType<typeof store.getState>
export default store



