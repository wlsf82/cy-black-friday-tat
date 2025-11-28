describe('Black Friday TAT', () => {
  beforeEach(() => {
    // A promoção acaba em 3 de dezembro de 2025!
    // E não tá errado não, em JavaScript, os meses
    // começam no ínice 0, portanto, 11 é dezembro.
    const dateInTheFuture = new Date(Date.UTC(2025, 11, 3))

    cy.clock(dateInTheFuture)
    cy.visit('https://black-friday-tat.vercel.app/')
  })

  it('counter shows 00 00 00 00 when the promotion is over', () => {
    cy.contains('Dias').prev().should('contain', '00')
    cy.contains('Horas').prev().should('contain', '00')
    cy.contains('Min').prev().should('contain', '00')
    cy.contains('Seg').prev().should('contain', '00')
  })
})
