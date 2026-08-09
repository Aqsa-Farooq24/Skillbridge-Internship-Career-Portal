import { test, expect } from "@playwright/test";

test("primary chat flow", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(
    page.getByText("Internship & Career Portal")
  ).toBeVisible();

  const aiButton = page.getByRole("button", { name: "AI Assistant" });
  await aiButton.waitFor({ state: "visible", timeout: 60000 });
  await aiButton.click();

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