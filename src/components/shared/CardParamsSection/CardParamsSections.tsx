import type { ICardParamsSectionProps } from "./type"
import styles from './CardParamsSection.module.css'

export const CardParamsSection = ( {title, children}: ICardParamsSectionProps) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  )
}