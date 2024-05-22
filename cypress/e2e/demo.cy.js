describe('Get the Page Title', () => {
  it('Visit the orangeHRM site and get the title', () => {
    //Visit the Url
    cy.visit("https://opensource-demo.orangehrmlive.com/")

    //Get the title of the page and log it
    cy.title().then((title) => {
      cy.log('Page title: ', title)
      expect(title).to.equal('OrangeHRM')
    })
  })
})


describe('Login Test', () => {
  it('Log in with credentials', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")

    //Enter username and password
    cy.get('input[placeholder="Username"]').type('Admin')
    cy.get('input[placeholder="Password"]').type('admin123')

    // Click the login button
    cy.get("button[type='submit']").click()
  })
})

