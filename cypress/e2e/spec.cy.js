describe("Test contact form", () => {
  it("Visit, fill and submit form - Should pass", () => {
    // Visit the page
    cy.visit("http://localhost:3000");

    // Fills out the form
    cy.get('[data-test="email"]').type("doe@gmail.com"); // Type email
    cy.get('[data-test="name"]').type("John Doe"); // Type name
    cy.get('[data-test="message"]').type("Hi, I'm John Doe"); // Type message
    cy.get('[data-test="submit"]').click(); // Click on submit button

    // Check if the success message is displayed
    cy.get('[data-test="success-message"]')
      .should("exist")
      .contains("Thank you John Doe for your message!");
  });

  
  // Test failing because of the error message
  it("Visit, fill and submit form - Should fail", () => {
    // Visit the page
    cy.visit("http://localhost:3000");

    // Fills out the form
    cy.get('[data-test="email"]').type("doe@gmail.com");
    cy.get('[data-test="name"]').type("Jo");
    cy.get('[data-test="message"]').type("Hi, I'm John Doe");
    cy.get('[data-test="submit"]').click();

    // Check if the error message is displayed
    cy.get('[data-test="error-message"]')
      .should("exist")
      .contains("Name must be between 3 and 30 characters");
  });
});
