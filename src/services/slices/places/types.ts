import type { IMeta } from "@/types/places/meta/types";
import type { IPlaceFull, IPlaceShort } from "@/types/places/types";

export interface IPlacesState {
  meta: IMeta | null
  places: IPlaceShort[]
  isLoading: boolean
  error: string | null
  currentPlace: IPlaceFull | null
  isLoadingCurrent: boolean
  errorCurrent: string | null
}