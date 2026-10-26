import type { ReactNode } from "react";
import type { IPlaceCardProps } from "./type";
import styles from './PlaceCard.module.css'
import { CardParamsSection } from "@/components/shared/CardParamsSection";
import { convertMonth, getBudget } from "@/utils/utils";
import { PriceGraph } from "@/components/shared/PriceGraph/PriceGraph";

export const PlaceCard = ({place} : IPlaceCardProps) => {
  const infrastructureItems = Object.entries(place.infrastructure)
  .filter(([, value]) => value)
  .map(([key]) => key)

  const renderRow = (label: string, value: ReactNode) => (
    <li className={styles.listItem}>
      <span className={styles.accentText}>{label}: </span>
      <span className={styles.mainText}>{value}</span>
    </li>
  )

  const boolText = (v: boolean) => (v ? 'да' : 'нет')

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <CardParamsSection 
          title='Описание'
          children={
            <p className={styles.mainText}>{place.description}</p>
          }
        />
        <CardParamsSection 
          title='Маршрут'
          children={
            <ul className={styles.list}>
              {renderRow('Как добраться', place.transfer)}
              {renderRow('Парковка', place.parking ? 'есть' : 'нет')}
              {renderRow('Нужна ли машина', place.needCar)}
              {renderRow('Ближайший аэропорт', place.nearestAirport)}
            </ul>
          }
        />
        <CardParamsSection 
          title='Доступность'
          children={
            <ul className={styles.list}>
              {renderRow('Доступно для людей с ОВЗ', boolText(place.accessibleOVZ))}
              {renderRow('Доступно с детьми', boolText(place.accessibleKids))}
            </ul>
          }
        />
        <CardParamsSection 
          title='Инфраструктура'
          children={
            <ul className={styles.list}>
              {infrastructureItems.map((item) => (
                <li key={item} className={styles.listItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 5.5 2-2m16 2-2-2m-7 5v4l2 2m6-2a8 8 0 1 1-16 0 8 8 0 0 1 16 0"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          }
        />
      </div>
      <div className={styles.divider}></div>
      <div className={styles.column}>
          <CardParamsSection
            title="Характеристики"
            children={
              <ul className={styles.list}>
              {renderRow('Оценка', place.rating)}
              {renderRow('Бюджет', getBudget(place.recommendedDays, place.avgDailySpend))}
              {renderRow('Средние траты за день', place.avgDailySpend)}
              {renderRow('Рекоммендуемое количество дней', place.recommendedDays)}
              {renderRow('Подходящие месяцы', place.season.map((item) => convertMonth(item, 'long')).join(', '))}
            </ul>
            }
          />
          <CardParamsSection
          title="Цены по месяцам"
          children={
            <PriceGraph pricesPerMonth={place.priceByMonth}/>
          }
          />
      </div>
    </div>
  )
}