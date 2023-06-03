import { configureStore } from '@reduxjs/toolkit';
import rocketreducer from './Rockets/RocketSlice';
// eslint-disable-next-line
import missionsreducer from './Missions/MissionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketreducer,
    missions: missionsreducer,
  },
});

export default store;
