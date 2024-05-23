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
describe('Login Test', () => {
    it('Should log in successfully', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/")
  
      //Enter username 
      cy.get('input[placeholder="Username"]').type('Admin')
      // Enter password
      cy.get('input[placeholder="Password"]').type('admin123')  
  
      // Click the login button
      cy.get("button[type='submit']").click()
  
      // Verify that the dashboard is displayed
      cy.url().should('include', '/web/index.php/dashboard/index')
      cy.contains('Dashboard').should('be.visible')
    })

    it('should navigate to the Admin page', () => {
      // Log in first
      cy.get('input[placeholder="Username"]').type('Admin')
      cy.get('input[placeholder="Password"]').type('admin123')
      cy.get("button[type='submit']").click()
  
      // Click on the Admin tab in the sidebar menu
      cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()
  
      // Verify that the Admin page is loaded
      cy.url().should('include', '/web/index.php/admin/viewAdminModule')
      cy.get('h6').should('contain', 'User Management')
    })
  
    it('should log out successfully', () => {
      // Log in first
      cy.get('input[name="Username"]').type('Admin')
      cy.get('input[name="password"]').type('admin123')
      cy.get("button[type='submit']").click()

      //Click on the user dropdown menu
      cy.get('.oxd-userdropdown-name').click()

      //Click on the logout button
      cy.get('a[href="/web/index.php/auth/logout"]').click()
    })
})
