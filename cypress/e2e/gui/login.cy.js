describe('login', () => {
  it('sucessffully', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })
})