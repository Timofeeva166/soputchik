import { PlaceCard } from "@/components/widgets/PlaceCard/PlaceCard";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Страница в разработке</p>
      <PlaceCard place={{
      "id": "place-001",
      "title": "Куршская коса",
      "region": "Калининградская область",
      "shortDescription": "Песчаные дюны между морем и заливом, танцующий лес и километры пустых пляжей.",
      "description": "Узкая полоса земли между Балтийским морем и Куршским заливом. Знаменита дюной Эфа, танцующим лесом и орнитологической станцией «Фрингилла». Идеально для спокойного отдыха на природе и долгих прогулок.",
      "image": "https://s3.russpass.ru/rp-mag-public-prod/images/shutterstoc.form.width-2440.format-webp.webpquality-100_VhGAKEg.webp",
      "rating": 4.8,
      "avgDailySpend": 4500,
      "recommendedDays": 4,
      "season": [4, 5, 6, 7, 8, 9],
      "overallCrowd": 55,
      "priceByMonth": [3200, 3300, 3600, 4000, 4500, 5200, 5800, 5600, 4800, 4000, 3500, 3400],
      "crowdByMonth": [15, 15, 25, 40, 55, 75, 90, 85, 60, 40, 25, 20],
      "audience": ["solo", "couple", "family"],
      "needCar": "optional",
      "restTypes": ["nature", "beach", "active"],
      "transfer": "Автобус из Калининграда, 1.5 часа",
      "parking": true,
      "nearestAirport": "Храброво (KGD), 60 км",
      "accessibleOVZ": false,
      "accessibleKids": true,
      "infrastructure": {
        "cafe": true,
        "hotel": true,
        "toilets": true,
        "wifi": false,
        "shops": false,
        "pharmacy": false
      }
    }}/>
    </>
  )
}