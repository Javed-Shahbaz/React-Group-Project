import { configureStore } from '@reduxjs/toolkit';
import rocketreducer from './Rockets/RocketSlice';
import missionsreducer from './Missions/MissionsSlice.js';

const store = configureStore({
  reducer: {
    rockets: rocketreducer,
    missions: missionsreducer,
  },
});

export default store;
