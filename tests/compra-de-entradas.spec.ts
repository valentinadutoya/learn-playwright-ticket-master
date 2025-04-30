import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('img', { name: 'Noche de Jazz' }).click();
  await page.getByText('Noche de Jazz19 de noviembre').click();
  await page.getByRole('img', { name: 'Noche de Jazz' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();
  await page.getByRole('button', { name: 'Comprar entradas' }).click();
  await page.getByRole('textbox', { name: 'Nombre del titular' }).click();
  await page.getByRole('textbox', { name: 'Nombre del titular' }).fill('vasgargvagberb');
  await page.getByRole('textbox', { name: 'Número de tarjeta' }).click();
  await page.getByRole('textbox', { name: 'Número de tarjeta' }).fill('1234567893526147');
  await page.getByRole('combobox', { name: 'Mes' }).click();
  await page.getByRole('option', { name: '10' }).click();
  await page.getByRole('combobox', { name: 'Año' }).click();
  await page.getByRole('option', { name: '2033' }).click();
  await page.getByRole('textbox', { name: 'CVC' }).click();
  await page.getByRole('textbox', { name: 'CVC' }).fill('234');
  await page.getByRole('textbox', { name: 'Email para recibir las' }).click();
  await page.getByRole('textbox', { name: 'Email para recibir las' }).fill('asvdfbvaedfbsrgnbrtbh');
  await page.getByRole('button', { name: 'Completar compra' }).click();
  await page.getByRole('textbox', { name: 'Email para recibir las' }).click();
  await page.getByRole('textbox', { name: 'Email para recibir las' }).fill('asvdfbvaedfbsrgnbrtbh@gmail.com');
  await page.getByRole('textbox', { name: 'Email para recibir las' }).press('Insert');
  await page.getByRole('button', { name: 'Completar compra' }).click();
});