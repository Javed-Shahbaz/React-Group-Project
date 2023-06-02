import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missionsSlice';

const store = configureStore({
  reducer: {
    missionData: missionsReducer,
  },
});

export default store;
