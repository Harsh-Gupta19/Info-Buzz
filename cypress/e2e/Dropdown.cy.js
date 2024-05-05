import { dropDownData } from '../../src/utils/data';

describe('Dropdown component', () => {
  beforeEach(() => {
    // Visit the page or component where the Dropdown component is rendered
    cy.visit('http://localhost:5173/'); // Replace with the URL of your application
  });


  it("renders the dropdown data on the screen", () => {
    // Check if the select element exists

    cy.get('[dropdown="option-1"]').should('exist')
    cy.get('[dropdown="option-7"]').should('exist')
    cy.get('[dropdown="option-30"]').should('exist')

    cy.get(`select option:last-child`).should('contain.text', "Last month");
  });

  
  it('Renders dropdown with correct options', () => {
    const testData =dropDownData;

    cy.get('#duration').select(testData[0].value);
    cy.get('select').should('exist'); 
    testData.forEach(item => {
      cy.get(`select option[value="${item.id}"]`).should('have.text', item.value);
    });
  });

  it('Updates dropdown value on option selection', () => {

    cy.get('select').should('exist');

    // Select an option from the dropdown
    cy.get('select').select('1');

    // Check if the selected option is displayed in the dropdown
    cy.get('select').should('have.value', '1');
  });

})