describe("Add Room", () => {
    it("should have text 'Oras si zona' in form", async () => {
      await page.goto("http://localhost:5000/#/adauga-camera")
      await expect(page).toHaveText("/form/label[1]/span/span", "Oras si zona")
    })
})