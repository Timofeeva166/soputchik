import { configureStore } from '@reduxjs/toolkit'
import placesReducer from '@/services/slices/places/placesSlice'

export const store = configureStore({
  reducer: {
    places: placesReducer
  }
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch