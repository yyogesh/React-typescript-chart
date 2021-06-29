import { createSlice } from 'redux-starter-kit';

const initialState = {
  selectedMetrics: [],
};

const slice = createSlice({
  name: 'selectedMetrics',
  initialState,
  reducers: {
    active: (state: any, action) => {
      state.selectedMetrics = [...state.selectedMetrics, action.payload];
    },
    remove: (state, action) => {
      state.selectedMetrics = state.selectedMetrics.filter((element: any) => element.metricName !== action.payload);
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
