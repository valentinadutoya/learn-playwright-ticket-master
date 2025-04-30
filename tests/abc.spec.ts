import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$75\.00Ver detalles$/ }).getByRole('link').click();
  await expect(page.locator('h1')).toContainText('Concierto Sinfónico');
  await page.getByText('de noviembre de 2023').click();
  await page.getByRole('heading', { name: 'Descripción' }).click();
  await page.getByRole('heading', { name: 'Comprar Entradas' }).click();
  await page.getByText('9 de noviembre de 202318:').click();
  await page.getByText('9 de noviembre de 202318:').click();
  await page.locator('div').filter({ hasText: /^9 de noviembre de 2023$/ }).click();
});