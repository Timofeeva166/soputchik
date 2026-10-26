import { useParams } from 'react-router-dom'
import styles from './PlacePage.module.css'
import { PlaceCard } from '@/components/widgets/PlaceCard'
import { useAppDispatch, useAppSelector } from '@/services/hooks'
import { selectCurrentPlace } from '@/services/slices/places/placesSelectors'
import { useEffect } from 'react'
import { loadPlaceById } from '@/services/slices/places/placesSlice'

export default function PlacePage() {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()

  const place = useAppSelector(selectCurrentPlace)

  useEffect(() => {
    if (id) dispatch(loadPlaceById(`place-${id}`))
  }, [dispatch, id])

  if (!place) {
      return (
        <main className={`${styles.container} ${styles.center}`.trim()}>
          <div className={styles.message}>Место не найдено</div>
        </main>
      )
    }

  return (
    <div 
      className={styles.container}
      style={{ backgroundImage: `url(${place.image})` }}>
      <h1 className={styles.title}>{place?.title}</h1>
      <p className={styles.subtitle}>{place?.region}</p>
      <PlaceCard place={place}/>
    </div>
    
  )
}