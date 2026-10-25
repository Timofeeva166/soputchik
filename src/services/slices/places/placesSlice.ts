import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { IPlacesState } from "./types";
import type { IPlaceFull, IPlacesShortResponse } from "@/types/places/types";
import { fetchCatalog, fetchPlaceInfoById } from "@/api/places";

const initialState: IPlacesState = {
  meta: null,
  places: [],
  isLoading: false,
  error: null,
  currentPlace: null,
  isLoadingCurrent: false,
  errorCurrent: null
}

export const loadCatalog = createAsyncThunk<IPlacesShortResponse>(
  'places/fetchPlaces',
  async() => {
    await new Promise((res) => setTimeout(res, 500))
    return await fetchCatalog()
  }
)

export const loadPlaceById = createAsyncThunk<IPlaceFull, string>(
  'places/fetchPlaceInfoByid',
  async(id, {rejectWithValue}) => {
    await new Promise((res) => setTimeout(res, 500))
    const place = await fetchPlaceInfoById(id)
    if (!place) return rejectWithValue(`Место не найдено`)
    return place
  }
)

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    clearCurrentPlace(state) {
      state.currentPlace = null;
      state.isLoadingCurrent = false;
      state.errorCurrent = null
    }
  },
  extraReducers: (builder) => {
    builder
      //КАТАЛОГ
      .addCase(loadCatalog.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loadCatalog.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.places = action.payload.data
        state.meta = action.payload.meta
      })
      .addCase(loadCatalog.rejected, (state, action) => {
        state.isLoading = false
        state.error =
          action instanceof Error
            ? action.message
            : 'Не удалось загрузить каталог'
      })
      //КАРТОЧКА МЕСТА
      .addCase(loadPlaceById.pending, (state) => {
        state.isLoadingCurrent = true
        state.errorCurrent = null
      })
      .addCase(loadPlaceById.fulfilled, (state, action) => {
        state.isLoadingCurrent = false
        state.errorCurrent = null
        state.currentPlace = action.payload
      })
      .addCase(loadPlaceById.rejected, (state, action) => {
        state.isLoadingCurrent = false
        state.errorCurrent =
          action instanceof Error
            ? action.message
            : 'Не удалось загрузить место'
      })
  }
})

export const { clearCurrentPlace } = placesSlice.actions
export default placesSlice.reducer