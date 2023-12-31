import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setSelectedNetwork: (state, action) => {
      state.selectedNetwork = action.payload;
    },
    setSelectedNode: (state, action) => {
      state.selectedNode = action.payload;
    },
    setVisualiseToNode: (state, action) => {
      state.selectedVisualiseToNode = action.payload;
    },
  },
});

export const { setSelectedNetwork, setSelectedNode, setVisualiseToNode } =
  configSlice.actions;

export default configSlice.reducer;
