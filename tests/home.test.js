describe("Landing page/Home", () => {
    it("should have the partial text 'Gaseste camere' in the h1", async () => {
      await page.goto("http://localhost:5000/")
      await expect(page).toHaveText("h1", "Gaseste camere")
    })
})