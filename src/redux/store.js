import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import rocketreducer from './Rockets/RocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketreducer,
    missions: missionsReducer,
  },
});

export default store;
