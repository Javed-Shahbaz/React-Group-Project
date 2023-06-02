import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missionData: [],
  status: 'notStarted',
  error: null,
};

export const fetchMissions = createAsyncThunk('missionData/fetchMissions', async () => {
  try {
    const response = await axios.get(API);
    const missionWithId = Object.entries(response.data).map(([id, missionName]) => ({
      mission_id: id,
      mission_Name: missionName,
    }));

    return missionWithId;
  } catch (error) {
    throw new Error(error.message);
  }
});

const missionsSlice = createSlice({
  name: 'missionData',
  initialState,
  reducers: {
    updateMissionStatus: (state, action) => {
      const { missionId, status } = action.payload;
      const mission = state.missionData.find((missionData) => missionData.mission_id === missionId);
      if (mission) {
        mission.status = status;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'success';
        state.missionData = action.payload;
      })
      .addCase(fetchMissions.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addMission, removeMission, updateMissionStatus } = missionsSlice.actions;
export default missionsSlice.reducer;
