import { test, expect } from "@playwright/test";

test("se visualisan 3 conciertos: Rock en Vivo, Noche de Jazz, Fiesta Electronico", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");
  await expect(
    page.getByRole("heading", { name: "Recital sinfónico de música clásica con artistas internacionales." })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Concierto de rock nacional con bandas invitadas." })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Festival de jazz al aire libre." })
  ).toBeVisible();
});
