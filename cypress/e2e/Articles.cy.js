describe('Articles Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');
    });
  
    it('Displays loading message while fetching data', () => {
      // Mock the fetch request to delay the response
      cy.intercept('GET', 'https://api.nytimes.com/**', {
        delay: 1000, 
        fixture: 'sample_articles.json' 
      }).as('fetchArticles');
  
      cy.get('.fallback-text').should('contain.text', 'Fetching the data...');
    });
  
  });
  