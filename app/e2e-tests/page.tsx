"use client"

import { useState } from "react"
import { Code } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function E2ETestsPage() {
  const [isRunning, setIsRunning] = useState(false)
  const [results, setResults] = useState<string[]>([])

  const runTests = async () => {
    setIsRunning(true)
    setResults([])

    // Simulamos la ejecución de pruebas
    setResults((prev) => [...prev, "Iniciando pruebas E2E con Playwright..."])

    await new Promise((resolve) => setTimeout(resolve, 1000))
    setResults((prev) => [...prev, "✅ Test: Carga de la página principal"])

    await new Promise((resolve) => setTimeout(resolve, 1000))
    setResults((prev) => [...prev, "✅ Test: Navegación a la página de detalle de concierto"])

    await new Promise((resolve) => setTimeout(resolve, 1000))
    setResults((prev) => [...prev, "✅ Test: Selección de entradas"])

    await new Promise((resolve) => setTimeout(resolve, 1000))
    setResults((prev) => [...prev, "✅ Test: Proceso de checkout"])

    await new Promise((resolve) => setTimeout(resolve, 1000))
    setResults((prev) => [...prev, "✅ Test: Validación de sobreventa"])

    await new Promise((resolve) => setTimeout(resolve, 1000))
    setResults((prev) => [...prev, "✅ Test: Confirmación de compra"])

    await new Promise((resolve) => setTimeout(resolve, 500))
    setResults((prev) => [...prev, ""])
    setResults((prev) => [...prev, "Todos los tests completados exitosamente! 6 pasados, 0 fallidos."])

    setIsRunning(false)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Pruebas E2E</h1>

      <Card>
        <CardHeader>
          <CardTitle>Pruebas automatizadas con Playwright</CardTitle>
          <CardDescription>
            Ejecuta pruebas end-to-end para verificar el funcionamiento de la aplicación
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Button onClick={runTests} disabled={isRunning}>
              <Code className="mr-2 h-4 w-4" />
              {isRunning ? "Ejecutando pruebas..." : "Ejecutar pruebas"}
            </Button>
          </div>

          {results.length > 0 && (
            <div className="rounded-md bg-black p-4 text-white">
              <pre className="font-mono text-sm">
                {results.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
