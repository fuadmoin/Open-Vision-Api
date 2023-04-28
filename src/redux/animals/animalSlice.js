import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  hasErrors: false,
  animals: [],
};

const url = 'https://api.petfinder.com/v2/animals?limit=100&page=1';
const url2 = 'https://api.petfinder.com/v2/animals?limit=100&page=2';
const apiKey = 'Ka9htJQUTSEl4R9IJo4VdO9Bb4AQj8nAbfdmye8NoOWqRsEZOS';
const secret = 'vkw65KyQyiJbzpncBYdbXy7YG5sXnv7f9ZZforx7';
export const fetchAnimals = createAsyncThunk('animal/fetchAnimals', async () => {
  const tokenResponse = await axios.post('https://api.petfinder.com/v2/oauth2/token', {
    grant_type: 'client_credentials',
    client_id: apiKey,
    client_secret: secret,
  });
  const accessToken = tokenResponse.data.access_token;
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };
  const response = await axios.get(url, config);
  const response2 = await axios.get(url2, config);
  const animals = [...response.data.animals, ...response2.data.animals];

  return animals;
});

const manSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAnimals.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchAnimals.fulfilled, (state, action) => ({

      ...state,
      loading: false,
      animals: action.payload,

    }));
    builder.addCase(fetchAnimals.rejected, (state) => ({
      ...state,
      loading: false,
      hasErrors: true,
    }));
  },
});

export default manSlice.reducer;
