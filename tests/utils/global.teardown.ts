import { prisma } from "../../lib/prisma";

async function globalTeardown() {
  console.log("Ejecutando globalTeardown: Limpiando base de datos...");

  // Elimina los datos generados durante las pruebas
  await prisma.entradasVendidas.deleteMany();
  await prisma.recitales.deleteMany();

  // Cierra la conexión con la base de datos
  await prisma.$disconnect();

  console.log("Base de datos limpiada y conexión cerrada.");
}

export default globalTeardown;
