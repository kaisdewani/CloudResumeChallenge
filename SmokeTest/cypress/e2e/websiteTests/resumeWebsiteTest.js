/// <reference types="cypress" />
describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://kaisdewani.com");
  });

  it("Check if JSON returns message property", () => {
    cy.request(
      "GET",
      "https://ykwtqllnii.execute-api.us-east-1.amazonaws.com/Test/",
      {}
    ).then((response) => {
      expect(response.body).to.have.property("message");
    });
  });

  it("Check API returns 200 response", () => {
    cy.request(
      "GET",
      "https://ykwtqllnii.execute-api.us-east-1.amazonaws.com/Test/",
      {}
    ).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
