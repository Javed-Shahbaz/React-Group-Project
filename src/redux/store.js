import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    missionData: missionsReducer,
  },
});

export default store;
