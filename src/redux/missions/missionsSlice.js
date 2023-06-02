import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missionData: [
    {
      id: 0,
      title: 'Thaicom',
      Description: '...',
      status: 'NOT A MEMBER',
    },
    {
      id: 1,
      title: 'Thaicom',
      Description: '...',
      status: 'NOT A MEMBER',
    },
    {
      id: 2,
      title: 'Thaicom',
      Description: '...',
      status: 'NOT A MEMBER',
    },
    {
      id: 3,
      title: 'Thaicom',
      Description: '...',
      status: 'NOT A MEMBER',
    },
    {
      id: 4,
      title: 'Thaicom',
      Description: '...',
      status: 'NOT A MEMBER',
    },
  ],
};

const missionsSlice = createSlice({
  name: 'missionData',
  initialState,
  reducers: {
    addMission: (state, action) => {
      state.missionData.push(action.payload);
    },
    removeMission: (state, action) => {
      state.missionData = state.missionData.filter((missionData) => missionData.id !== action.payload);
    },
    updateMissionStatus: (state, action) => {
      const { missionId, status } = action.payload;
      const mission = state.missionData.find((missionData) => missionData.id === missionId);
      if (mission) {
        mission.status = status;
      }
    },
  },
});

export const { addMission, removeMission, updateMissionStatus } = missionsSlice.actions;
export default missionsSlice.reducer;
