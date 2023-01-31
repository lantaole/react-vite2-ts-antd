// count.slice.jsx
import { createSlice } from '@reduxjs/toolkit'
export interface Common {
  topBgColor: string
}
const initialState: Common = { topBgColor: 'transparent' }

export const counterSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    changeTopBg: (state, action) => {state.topBgColor = action.payload},
  },
})

export const { changeTopBg } = counterSlice.actions
export default counterSlice.reducer
