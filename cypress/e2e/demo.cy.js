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

// Verify that user can login with valid credentials
describe('Login Functionality', () => {  
    // Check error messages for invalid credentials
    it('Show error for invalid credentials', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/")

      //Enter invalid username and password
      cy.get('input[placeholder="Username"]').type('invalid')
      cy.get('input[placeholder="Password"]').type('invalid123')

      //Click the login button
      cy.get("button[type='submit']").click()

      // Verify the error message
      cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div > div.oxd-alert.oxd-alert--error > div.oxd-alert-content.oxd-alert-content--error > p').should('have.text', 'Invalid credentials')

    })

  
})

