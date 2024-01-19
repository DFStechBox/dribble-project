import styles from './PricingCard.module.css'

interface

const PricingCard = (
  {
    label,
    priceLabel,
    image,
    imageAlt,
  }
) => {
  return (
    <div className={styles.card}>
      <span className={styles.card__label}>{label}</span>
      <div className={styles.card__image}>
    <img src={image} alt={imageAlt} />
      </div>
    </div>
  )
}

export default PricingCard