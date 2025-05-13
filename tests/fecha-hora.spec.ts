import { test, expect } from "@playwright/test";

test("se visualisan 3 conciertos: Rock en Vivo, Noche de Jazz, Fiesta Electronico", async ({
    page,
}) => {
    await page.goto("http://localhost:3000/");
    // Esperamos a que el contenido esté visible
    await page.waitForSelector('text=Recital');

    // Verificamos algunas fechas formateadas
    await expect(page.getByText('7 de octubre de 2025')).toBeVisible();  // Clásica
    await expect(page.getByText('8 de mayo de 2025 ')).toBeVisible();  // Rock
    await expect(page.getByText('9 de diciembre de 2025')).toBeVisible();  // Jazz
    await expect(page.getByText('9 de mayo de 2025')).toBeVisible();  // Reguetón
});

