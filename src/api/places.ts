import type { IPlaceFull, IPlacesFullResponse, IPlacesShortResponse } from "@/types/places/types";

const BASE_URL = '/src/data'

// ПОЛУЧИТЬ КАТАЛОГ
export async function fetchCatalog(): Promise<IPlacesShortResponse> {
  const response = await fetch(`${BASE_URL}/places-short.json`)
  if (!response.ok) throw new Error('Failed to fetch catalog')
  return response.json()
}

//ПОЛУЧИТЬ ИНФО ПО ВСЕМ МЕСТАМ
export async function fetchPlacesInfo(): Promise<IPlacesFullResponse> {
  const response = await fetch(`${BASE_URL}/places-full.json`)
  if(!response.ok) throw new Error('Failed to fetch place')
  return response.json()
}

//ПОЛУЧИТЬ ИНФО ПО КОНКРЕТНОМУ МЕСТУ
export async function fetchPlaceInfoById(id: string): Promise<IPlaceFull | undefined> {
  const { data } = await fetchPlacesInfo();
  return data.find((item) => item.id === id)
}