import {prisma} from "../lib/prisma"
export async function obtenerRecitales() {
  try {
    return prisma.recitales.findMany()
  } catch (error) {
    console.log(error)
    return []
  }
  
}