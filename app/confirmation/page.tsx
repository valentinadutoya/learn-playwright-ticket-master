"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle, Download, Home, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { concerts } from "@/lib/data"
import { formatDate } from "@/lib/utils"
import type { Concert } from "@/lib/types"

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [concert, setConcert] = useState<Concert | null>(null)
  const [quantity, setQuantity] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [confirmationCode, setConfirmationCode] = useState("")

  useEffect(() => {
    const concertId = searchParams.get("concertId")
    const quantityParam = searchParams.get("quantity")

    if (!concertId || !quantityParam) {
      setError("Información de compra incompleta")
      setIsLoading(false)
      return
    }

    const selectedConcert = concerts.find((c) => c.id === concertId)
    const parsedQuantity = Number.parseInt(quantityParam)

    if (!selectedConcert) {
      setError("Concierto no encontrado")
      setIsLoading(false)
      return
    }

    if (isNaN(parsedQuantity) || parsedQuantity < 1) {
      setError("Cantidad de entradas inválida")
      setIsLoading(false)
      return
    }

    // Generar código de confirmación aleatorio
    const code = Math.random().toString(36).substring(2, 10).toUpperCase()
    setConfirmationCode(code)

    setConcert(selectedConcert)
    setQuantity(parsedQuantity)
    setIsLoading(false)
  }, [searchParams])

  if (isLoading) {
    return (
      <div className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-12">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p>Procesando tu compra...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-12">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-destructive">{error}</h1>
          <p className="mb-6 text-muted-foreground">No podemos mostrar la confirmación de tu compra.</p>
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  if (!concert) return null

  const totalPrice = concert.price * quantity

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
          <h1 className="mb-2 text-3xl font-bold">¡Compra exitosa!</h1>
          <p className="text-muted-foreground">
            Tu compra ha sido procesada correctamente. Hemos enviado las entradas a tu correo electrónico.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Detalles de la compra</CardTitle>
            <CardDescription>Código de confirmación: {confirmationCode}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">{concert.name}</h3>
              <p className="text-sm text-muted-foreground">
                {formatDate(concert.date)} - {concert.time}
              </p>
              <p className="text-sm text-muted-foreground">{concert.location}</p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Precio por entrada:</span>
                <span>${concert.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Cantidad:</span>
                <span>{quantity}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total pagado:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="flex w-full flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <Button className="flex-1">
                <Download className="mr-2 h-4 w-4" />
                Descargar entradas
              </Button>
              <Button variant="outline" className="flex-1">
                <Mail className="mr-2 h-4 w-4" />
                Reenviar al correo
              </Button>
            </div>
            <Button variant="ghost" asChild className="w-full">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
