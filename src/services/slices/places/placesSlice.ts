import { createSlice } from "@reduxjs/toolkit";
import type { IPlacesState } from "./types";

const initialState: IPlacesState = {
  places: [],
  isLoading: false,
  error: null,
  currentPlace: null,
  isLoadingCurrent: false,
  errorCurrent: null
}

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    clearCurrentPlace(state) {
      state.currentPlace = null;
      state.isLoadingCurrent = false;
      state.errorCurrent = null
    }
  }
})