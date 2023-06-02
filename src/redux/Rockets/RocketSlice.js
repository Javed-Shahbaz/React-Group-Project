import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('fetch/data', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/rockets');
  const rocket = response.data.map((item) => ({
    id: item.id,
    rocket_name: item.name,
    description: item.description,
    flickr_images: item.flickr_images[0],
  }));
  return rocket;
});

const initialState = {
  data: [],
  status: false,
};

const RocketSlice = createSlice({
  name: 'Rocket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = false;
      });
  },
});

export default RocketSlice.reducer;