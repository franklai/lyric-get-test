// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("https://franks543-lyric-get.vercel.app/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Lyric Get/);
});

test("switch tab", async ({ page }) => {
  await page.goto("https://franks543-lyric-get.vercel.app/");

  await expect(page.getByText("kkbox", { exact: true })).toBeHidden();

  await page.getByText("Examples").click();

  await expect(page.getByText("kkbox", { exact: true })).toBeVisible();
});

test("click example show content", async ({ page }) => {
  await page.goto("https://franks543-lyric-get.vercel.app/");

  await page.getByText("Examples").click();

  await page.getByText("https://www.kkbox.com").click();

  const textarea = page.locator("#lyric_textarea");
  await expect(textarea).toBeVisible();

  await expect(textarea).toHaveValue(/告白氣球/);
});
