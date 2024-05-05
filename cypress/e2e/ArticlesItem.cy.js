
describe('ArticleItem Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');

    });
  
    it('Handles Loading message', () => {
      // Check if the loading message is displayed
      cy.get('.fallback-text').should('exist');
    });
  
  });
  