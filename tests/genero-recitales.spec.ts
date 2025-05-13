import { test, expect } from '@playwright/test';

test('se muestra algún recital con texto Teatro Colón', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const teatro = page.getByText(/Teatro Colón/i);
    await expect(teatro.first()).toBeVisible();
});
