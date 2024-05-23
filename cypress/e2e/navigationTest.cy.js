// Check if the user can navigate to different sections like Admin, PIM, Leave etc.
describe('Navigtion Test', () => {
    beforeEach(() => {
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.get('input[placeholder="Username"]').type('Admin')
      cy.get('input[placeholder="Password"]').type('admin123')  
      cy.get("button[type='submit']").click()
    })
    
      it('Navigates to the Admin, Leave, PIM section', () => {
        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()
        cy.url().should('include', '/index.php/admin/viewSystemUsers')

        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
        cy.url().should('include', '/index.php/pim/viewEmployeeList')

        cy.get('a[href="/web/index.php/leave/viewLeaveModule"]').click()
        cy.url().should('include', '/index.php/leave/viewLeaveList')
      })
    })