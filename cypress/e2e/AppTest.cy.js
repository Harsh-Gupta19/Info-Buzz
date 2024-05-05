describe('App Component', () => {
    beforeEach(() => {

      cy.visit('http://localhost:5173');
    });
  
    it('Renders Header component', () => {
      // Check if the Header component exists
      cy.get('Header').should('exist');
    });

});