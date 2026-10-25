import type { TRootState } from '@/services/store'
import type { TMonth } from '@/types/places/types'
import { createSelector } from '@reduxjs/toolkit'

export const selectPlacesState = (state: TRootState) => state.places
export const selectMeta = (state: TRootState) => state.places.meta

export const selectCatalog = (state: TRootState) => state.places.places
export const selectCatalogLoading = (state: TRootState) => state.places.isLoading
export const selectCatalogError = (state: TRootState) => state.places.error

export const selectCurrentPlace = (state: TRootState) => state.places.currentPlace
export const selectIsCurrentPlaceLoading = (state: TRootState) => state.places.isLoadingCurrent
export const selectCurrentError = (state: TRootState) => state.places.errorCurrent

export const selectInThisSeason = createSelector([selectCatalog], (places) => {
  const monthNumber = new Date().getMonth() + 1 as TMonth;
  return [...places]
  .filter((place) => place.season.includes(monthNumber))
  .slice(0, 9)
})
