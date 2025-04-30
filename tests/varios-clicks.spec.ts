import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$120\.00Ver detalles$/ }).getByRole('link').click();
  await page.getByText('de diciembre de 2023').click();
  await page.getByRole('heading', { name: 'Descripción' }).click();
  await page.getByText('Despide el año con la mejor m').click();
  await page.getByText('Festival Electrónico30 de').click();
  await page.getByText('Precio por entrada:$').click();
  await page.getByRole('spinbutton').click();
  await page.getByText('Total:$').click();
  await page.getByRole('button', { name: 'Comprar entradas' }).click();
  await page.getByText('Resumen de compra').click();
});