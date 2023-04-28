import { configureStore } from '@reduxjs/toolkit';
import animalReducer from './animals/animalSlice';

const store = configureStore({
  reducer: {
    animal: animalReducer,
  },
});

export default store;
