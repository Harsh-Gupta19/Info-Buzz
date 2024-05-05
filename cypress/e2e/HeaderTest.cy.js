describe('Header Component', () => {
    beforeEach(() => {
      // Visit the page or component where the Header component is rendered
      cy.visit('http://localhost:5173/');
    });
  
    it('Renders Header component', () => {
      cy.get('header#main-header').should('exist');
    });
  
    it('Displays correct title', () => {
      // Check if the title text is displayed correctly
      cy.get('header#main-header h1').should('contain.text', 'New York Times');
    });
  
    it('Renders dropdown with correct options', () => {
      cy.get('select#duration').should('exist');
      
      cy.get('select#duration option').should('have.length', 3); 

      cy.get('select#duration option').eq(0).should('have.text', 'Today');
      cy.get('select#duration option').eq(1).should('have.text', 'Last week');
      cy.get('select#duration option').eq(2).should('have.text', 'Last month');
    });

});