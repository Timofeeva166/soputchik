import type { TAudience, TMonth, TNeedCar, TRestType } from "../types"

export interface IMetaOption<TId extends string = string> {
  id: TId
  name: string
}

export interface ISeasonOptions {
  id: string
  name: TSeason
  months: TMonth[]
}

export interface IMonthsOptions {
  id: number
  name: string
  shortName: string
}

export interface IMeta {
  regions: IMetaOption[]
  restTypes: IMetaOption<TRestType>[]
  audience: IMetaOption<TAudience>[]
  needCar: IMetaOption<TNeedCar>[]
  seasons: ISeasonOptions[]
  months: IMonthsOptions[]
}

export type TSeason = 'winter' | 'spring' | 'summer' | 'autumn'