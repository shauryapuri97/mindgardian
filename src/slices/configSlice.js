import { createSlice } from '@reduxjs/toolkit'

const initialState = {
}

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setSelectedNetwork: (state, action) => {
      state.selectedNetwork = action.payload;
    },
  },
})

export const { setSelectedNetwork } = configSlice.actions

export default configSlice.reducer;