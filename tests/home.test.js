describe("Landing page/Home", () => {
    
  it("should have 'Gaseste camere' text in the page", async () => {
    await page.goto("http://localhost:5000/")
    await expect(page).toHaveText("h1", "Gaseste camere")
  }),

  it("should show login page", async () => {
    await page.click('"Adauga camera"')
    await expect(page).toHaveText("INTRA CU FACEBOOK")
  }),

  it("should login with facebook", async () => {
    // todo
  })

})