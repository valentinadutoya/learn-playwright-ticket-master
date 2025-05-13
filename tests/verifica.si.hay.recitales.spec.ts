import { test, expect } from "@playwright/test";

test("se visualisan 3 conciertos: Rock en Vivo, Noche de Jazz, Fiesta Electronico", async ({
    page,
}) => {
    await page.goto("http://localhost:3000/");
    await expect(page.getByText('Anfiteatro Parque Centenario, CABA')).toBeVisible();
    await expect(page.getByText('Teatro Municipal, Córdoba')).toBeVisible();
    await expect(page.getByText('Club Paraguay, Córdoba')).toBeVisible();

});