import type { Concert } from "./types"

export const concerts: Concert[] = [
  {
    id: "1",
    name: "Rock en Vivo 2023",
    date: "2023-12-15",
    time: "20:00",
    location: "Estadio Nacional, Ciudad de México",
    description:
      "El festival de rock más grande del año con las mejores bandas nacionales e internacionales. Una experiencia musical inolvidable con más de 8 horas de música en vivo.",
    price: 85.99,
    availableTickets: 500,
    genre: "Rock",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "2",
    name: "Noche de Jazz",
    date: "2023-11-20",
    time: "19:30",
    location: "Teatro Metropolitan, Ciudad de México",
    description:
      "Una velada elegante con los mejores exponentes del jazz contemporáneo. Disfruta de una atmósfera íntima y sofisticada mientras escuchas a los maestros del género.",
    price: 65.5,
    availableTickets: 200,
    genre: "Jazz",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "3",
    name: "Festival Electrónico",
    date: "2023-12-31",
    time: "22:00",
    location: "Autódromo Hermanos Rodríguez, Ciudad de México",
    description:
      "Despide el año con la mejor música electrónica. DJs internacionales, efectos visuales impresionantes y la mejor producción para una fiesta inolvidable.",
    price: 120.0,
    availableTickets: 1000,
    genre: "Electrónica",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "4",
    name: "Concierto Sinfónico",
    date: "2023-11-10",
    time: "18:00",
    location: "Palacio de Bellas Artes, Ciudad de México",
    description:
      "La orquesta sinfónica nacional presenta las obras maestras de Beethoven y Mozart. Una experiencia cultural que no te puedes perder en el recinto más emblemático del país.",
    price: 75.0,
    availableTickets: 300,
    genre: "Clásica",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "5",
    name: "Festival de Pop Latino",
    date: "2023-12-05",
    time: "17:00",
    location: "Foro Sol, Ciudad de México",
    description:
      "Los artistas más populares del momento reunidos en un solo escenario. Más de 6 horas de música pop latina con tus canciones favoritas.",
    price: 95.5,
    availableTickets: 0, // Sin entradas disponibles para probar el caso de uso
    genre: "Pop Latino",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "6",
    name: "Noche de Reggaetón",
    date: "2023-11-25",
    time: "21:00",
    location: "Arena Ciudad de México, Ciudad de México",
    description:
      "Los mejores exponentes del reggaetón y el trap latino en un concierto explosivo. Prepárate para bailar toda la noche con los éxitos del momento.",
    price: 110.0,
    availableTickets: 2, // Pocas entradas disponibles para probar el caso de uso
    genre: "Reggaetón",
    image: "/placeholder.svg?height=400&width=800",
  },
]
