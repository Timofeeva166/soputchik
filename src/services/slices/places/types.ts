import type { IPlaceFull, IPlaceShort } from "@/types/places/types";

export interface IPlacesState {
  places: IPlaceShort[]
  isLoading: boolean
  error: string | null
  currentPlace: IPlaceFull | null
  isLoadingCurrent: boolean
  errorCurrent: string | null
}