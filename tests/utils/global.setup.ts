import { prisma } from "../../lib/prisma";

async function globalSetup() {
  console.log("Ejecutando globalSetup: Inicializando entorno de pruebas...");

  // Limpia la base de datos
  await prisma.entradasVendidas.deleteMany();
  await prisma.recitales.deleteMany();

  // Lista de artistas y ubicaciones para recitales pop
  const artistasPop = [
    { nombre: "Lali Espósito", ciudad: "Buenos Aires" },
    { nombre: "Tini Stoessel", ciudad: "Córdoba" },
    { nombre: "Camila Cabello", ciudad: "Rosario" },
    { nombre: "Harry Styles", ciudad: "Mendoza" },
    { nombre: "Dua Lipa", ciudad: "La Plata" },
    { nombre: "Olivia Rodrigo", ciudad: "Salta" },
    { nombre: "Shawn Mendes", ciudad: "San Juan" },
    { nombre: "Aitana", ciudad: "Mar del Plata" },
    { nombre: "Carlos Vives", ciudad: "Tucumán" },
    { nombre: "Katy Perry", ciudad: "Neuquén" },
  ];

  for (const artista of artistasPop) {
    const recital = await prisma.recitales.create({
      data: {
        ubicacion: artista.ciudad,
        descripcion: `Recital en vivo de ${artista.nombre} con su tour POP.`,
        fechaYHora: new Date(Date.now() + Math.floor(Math.random() * 60) * 24 * 60 * 60 * 1000), // dentro de 60 días
        precioDeEntrada: Math.floor(Math.random() * 4000 + 2000), // entre 2000 y 6000
        cantidadDisponible: Math.floor(Math.random() * 300 + 200), // entre 200 y 500
        genero: "pop",
      },
    });

    // Entradas vendidas (solo si se vendieron algunas)
    const vendidas = Math.floor(Math.random() * 100);
    if (vendidas > 0) {
      await prisma.entradasVendidas.create({
        data: {
          recitalId: recital.id,
          cantidad: vendidas,
        },
      });
    }
  }

  console.log("10 recitales de artistas pop insertados correctamente.");
}

export default globalSetup;
