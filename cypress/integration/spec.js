// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

context('Block Power Smoke Test', () => {
  beforeEach(() => {
    // usually we recommend setting baseUrl in cypress.json
    // but for simplicity of this example we just use it here
    // https://on.cypress.io/visit
    cy.visit('http://localhost:3000')
    cy.fixture('users').then(function (usersData) {
      this.user = usersData.gaAtlanta1;
    })
  })

  it('shows the ambassador welcome page', function () {
    cy.contains('Become a Voting Ambassador')
    cy.get('button').contains('Get Started')
      .click()
    // TODO add back button test
    cy.get('button').contains('Continue')
      .click()
    // TODO add validation tests
    cy.get('input[name="first_name"]').type(this.user.firstName)
    cy.get('input[name="last_name"]').type(this.user.lastName)
    cy.get('button').contains('Continue')
      .click()
    // TODO Add address validation test
    cy.get('input[name="address1"]').type(this.user.address1)
    cy.get('input[name="city"]').type(this.user.city)
    cy.get('input[name="state"]').click().get(`div[title="${this.user.state}"]`).click()
    cy.get('input[name="zip"]').type(this.user.zip)
    cy.get('button').contains('Continue')
      .click()
    cy.get('input[name="email"]').type(this.user.email)
    cy.get('input[name="phone"]').type(this.user.phone)
    cy.get('button').contains('Continue')
      .click()
    cy.get('input[name="first_name"]').should('have.value', this.user.firstName)
    cy.get('input[name="last_name"]').should('have.value', this.user.lastName)
    cy.get('input[name="address1"]').should('have.value', this.user.address1)
    cy.get('input[name="city"]').should('have.value', this.user.city)
    cy.get('input[name="state"]').should('have.value', this.user.state)
    cy.get('input[name="zip"]').should('have.value', this.user.zip)
    cy.get('input[name="email"]').should('have.value', this.user.email)
    cy.get('input[name="phone"]').should('have.value', this.user.phone)
    cy.get('button').contains('Submit')
      .click()
    // TODO test admin creation of user
    // TODO stub data for submit for local only testing
  })

})
