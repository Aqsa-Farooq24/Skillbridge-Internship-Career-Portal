import { test, expect } from "@playwright/test";

test("primary chat flow", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(
    page.getByText("Internship & Career Portal")
  ).toBeVisible();

  await page.getByRole("button", { name: /Ask AI Assistant/i }).click();

  await expect(
    page.getByPlaceholder("Ask about internships...")
  ).toBeVisible();

  await page
    .getByPlaceholder("Ask about internships...")
    .fill("Frontend internships");

  await page.getByRole("button", { name: "Send" }).click();

  await expect(
    page.getByText("Frontend internships")
  ).toBeVisible();
});