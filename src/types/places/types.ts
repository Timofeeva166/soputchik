export interface IPlaceShort {
  id: string
  title: string
  region: string
  image: string
  shortDescription: string
  rating: number
  avgDailySpend: number
  recommendedDays: number
  season: TMonth[]
  audience: TAudience[]
  needCar: TNeedCar
  restTypes: TRestType[]
  accessibleOVZ: boolean
  accessibleKids: boolean
}

export interface IPlaceFull extends IPlaceShort {
  description: string
  overallCrowd: number
  priceByMonth: number[]
  crowdByMonth: number[]
  transfer: string
  parking: boolean
  nearestAirport: string
  infrastructure: IInfrastructure
}

export interface IInfrastructure {
  cafe: boolean
  hotel: boolean
  toilets: boolean
  wifi: boolean
  shops: boolean
  pharmacy: boolean
}

export interface IPlacesResponse {
  
}

export type TRestType = 'city' | 'culture' | 'gastronomy' | 'beach' | 'family' | 'active' | 'nature' | 'extreme' | 'winter' | 'mountain' | 'roadtrip'

export type TAudience = 'solo' | 'couple' | 'family'

export type TNeedCar = 'required' | 'optional' | 'not_required'

export type TMonth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12