import { test, expect } from "@playwright/test";

test("se visualisan 3 conciertos: Rock en Vivo, Noche de Jazz, Fiesta Electronico", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");
  await expect(
    page.getByRole("heading", { name: "Rock en Vivo" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Noche de Jazz" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Festival Electrónico" })
  ).toBeVisible();
});
