/// <reference types="cypress" />
import searchquery from "../../fixtures/search.json";

Cypress.Commands.add("lazy", () => {
  cy.log("I am lazy");
});

Cypress.Commands.add("closeCookiePopUp", () => {
  cy.get("#L2AGLb > .QS5gu").click().should("not.be.visible");
});

Cypress.Commands.add("closePopUpB", () => {
  cy.get("body").then(($body) => {
    if ($body.find("#L2AGLb > .QS5gu").length > 0) {
      cy.get("#L2AGLb > .QS5gu").then(($button) => {
        if ($button.is(":visible")) {
          cy.wrap($button).click();
        }
      });
    }
  });
});

describe("Tests of search PB website", () => {
  beforeEach("setup", () => {
    cy.visit("/");
    cy.url().should("contain", "google");
    cy.get("#APjFqb").as("search");
    cy.get(".aajZCb > .lJ9FBc > center > .gNO89b").as("searchbutton");
    cy.fixture("search").as("frazy");
    cy.lazy();
  });
  it("search politchnika", function () {
    cy.get("#APjFqb").as("search");
    cy.closePopUpB();
    cy.get("@search").clear().type(this.frazy[2].fraza);
    cy.get(".aajZCb > .lJ9FBc > center > .gNO89b").click().wait(2000);
    cy.url().should("contain", this.frazy[2].query);
  });
  it("search politchnika2", function () {
    cy.closeCookiePopUp();
    cy.get("@search").clear().type(searchquery[2].fraza);
    cy.get(".aajZCb > .lJ9FBc > center > .gNO89b").click().wait(1000);
    cy.url().should("contain", searchquery[2].query);
  });
  it("search politchnika3", () => {
    cy.get("#L2AGLb > .QS5gu").click().should("not.be.visible");
    cy.get("@frazy").then((frazy) => {
      cy.get("@search").clear().type(frazy[2].fraza);
    });
    cy.get(".aajZCb > .lJ9FBc > center > .gNO89b").click().wait(1000);
    cy.get("@frazy").then((frazy) => {
      cy.url().should("contain", frazy[2].query);
    });
  });
});
