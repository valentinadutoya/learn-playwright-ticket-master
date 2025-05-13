import { prisma } from "../../lib/prisma";

async function globalSetup() {
  console.log("Ejecutando globalSetup: Inicializando entorno de pruebas...");

  // Limpia la base de datos
  await prisma.recitales.deleteMany();

  await prisma.recitales.createMany({
    data: [
      {
        "id": 1,
        "ubicacion": "Teatro Colón, Buenos Aires",
        "descripcion": "Recital sinfónico de música clásica con artistas internacionales.",
        "createdAt": "2025-05-13T12:00:00Z",
        "fechaYHora": "2025-06-15T20:00:00Z",
        "precioDeEntrada": 3500.00,
        "cantidadDisponible": 500,
        "genero": "Clásica"
      },
      {
        "id": 2,
        "ubicacion": "Luna Park, Buenos Aires",
        "descripcion": "Concierto de rock nacional con bandas invitadas.",
        "createdAt": "2025-05-13T12:00:00Z",
        "fechaYHora": "2025-07-10T21:30:00Z",
        "precioDeEntrada": 4200.00,
        "cantidadDisponible": 800,
        "genero": "Rock"
      },
      {
        "id": 3,
        "ubicacion": "Anfiteatro Parque Centenario, CABA",
        "descripcion": "Festival de jazz al aire libre.",
        "createdAt": "2025-05-13T12:00:00Z",
        "fechaYHora": "2025-08-05T18:00:00Z",
        "precioDeEntrada": 2500.00,
        "cantidadDisponible": 300,
        "genero": "Jazz"
      },
      {
        "id": 4,
        "ubicacion": "Teatro Municipal, Córdoba",
        "descripcion": "Noche de ópera con repertorio de Verdi y Puccini.",
        "createdAt": "2025-05-13T12:00:00Z",
        "fechaYHora": "2025-09-12T19:00:00Z",
        "precioDeEntrada": 4800.00,
        "cantidadDisponible": 350,
        "genero": "Ópera"
      },
      {
        "id": 5,
        "ubicacion": "Club Paraguay, Córdoba",
        "descripcion": "Show íntimo de indie pop con banda emergente.",
        "createdAt": "2025-05-13T12:00:00Z",
        "fechaYHora": "2025-06-25T22:00:00Z",
        "precioDeEntrada": 2800.00,
        "cantidadDisponible": 200,
        "genero": "Indie Pop"
      },
      {
        "id": 6,
        "ubicacion": "Estadio Único, La Plata",
        "descripcion": "Gran espectáculo de reguetón con invitados internacionales.",
        "createdAt": "2025-05-13T12:00:00Z",
        "fechaYHora": "2025-11-20T21:00:00Z",
        "precioDeEntrada": 6000.00,
        "cantidadDisponible": 1000,
        "genero": "Reguetón"
      },
      {
        "id": 7,
        "ubicacion": "Ciudad Cultural Konex, CABA",
        "descripcion": "Encuentro de música electrónica con DJs locales.",
        "createdAt": "2025-05-13T12:00:00Z",
        "fechaYHora": "2025-07-18T23:00:00Z",
        "precioDeEntrada": 3200.00,
        "cantidadDisponible": 400,
        "genero": "Electrónica"
      },
      {
        "id": 8,
        "ubicacion": "Auditorio Belgrano, CABA",
        "descripcion": "Recital acústico de cantautores emergentes.",
        "createdAt": "2025-05-13T12:00:00Z",
        "fechaYHora": "2025-08-30T20:30:00Z",
        "precioDeEntrada": 2300.00,
        "cantidadDisponible": 150,
        "genero": "Acústico"
      },
      {
        "id": 9,
        "ubicacion": "Teatro El Círculo, Rosario",
        "descripcion": "Presentación de banda de folclore argentino.",
        "createdAt": "2025-05-13T12:00:00Z",
        "fechaYHora": "2025-09-05T19:30:00Z",
        "precioDeEntrada": 3000.00,
        "cantidadDisponible": 350,
        "genero": "Folclore"
      },
      {
        "id": 10,
        "ubicacion": "Centro Cultural Borges, CABA",
        "descripcion": "Noche de tango con orquesta en vivo y bailarines.",
        "createdAt": "2025-05-13T12:00:00Z",
        "fechaYHora": "2025-10-15T20:00:00Z",
        "precioDeEntrada": 2700.00,
        "cantidadDisponible": 300,
        "genero": "Tango"
      }
    ]
  })



  console.log("10 recitales insertados correctamente.");
}

export default globalSetup;
