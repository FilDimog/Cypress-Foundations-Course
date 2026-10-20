describe('Bethany\'s Pie ShopHomepage', () => {
    beforeEach(() => {
      cy.visit('/')
    })

  it('should load the homepage', () => {
    cy.get('[data-testid="home-container"]').should('exist')
    cy.get('[data-testid="pies-section"]').should('exist')
  });

  it('should display the carusels', () => {
    cy.get('[data-testid="carusel-slide"]').should('exist')
    cy.get('[data-testid="pies-section"]').should('have.length', 1)
  });

  it('should have pie item more than 0', () => {
    cy.get('[data-testid="pie-item"]').should('have.length.greaterThan', 1)
  });

  it('should have pie item with name, description and price', () => {
    cy.get('[data-testid="pie-item"]').each(($el) => {
      cy.wrap($el).find('h3').should('exist')
      cy.wrap($el).find('p').contains('$').should('exist')
      cy.wrap($el).find('button').contains('Add to Cart').should('be.visible')
    })
});
});