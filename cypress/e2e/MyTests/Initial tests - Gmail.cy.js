/// <reference types="cypress" />

beforeEach("setup", () => {
  cy.visit("https://mail.google.com/");
  cy.url().should("contain", "mail");
});

describe("Allowing people to register", () => {
  it("Create account", () => {
    cy.get('[jsname="WjL7X"] > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click();
  });

  it("Choose for whom", () => {
    cy.get('[jsname="WjL7X"] > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click();
    cy.wait(3000).get('[jsname="RZzeR"] > .VfPpkd-StrnGf-rymPhb-b9t22c').click();
  });
});
