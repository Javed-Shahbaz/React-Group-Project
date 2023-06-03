import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  loading: 'idle',
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await axios.get(API);
    const missionWithId = response.data.map((missions) => ({
      mission_id: missions.mission_id,
      mission_name: missions.mission_name,
      description: missions.description,
      status: 'NOT A MEMBER',
    }));
    return missionWithId;
  } catch (error) {
    throw new Error(error.message);
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    updateMissionStatus: (state, action) => {
      const { missionId, status } = action.payload;
      const mission = state.missions.find((missions) => missions.mission_id === missionId);
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
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export const { updateMissionStatus } = missionsSlice.actions;
export default missionsSlice.reducer;
