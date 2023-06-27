/// <reference types="cypress" />
import googlePage from "../../PageObject/google";
const google = new googlePage();

beforeEach("setup", () => {
  cy.viewport(1440, 1080);
  cy.visit("https://www.google.com");
  cy.url().should("contain", "google");
});
describe("Tests of cookie pop-up on google", () => {
  it("Accept Cookies", () => {
    google.getAcceptCookieSelector().should("be.visible");
    google.getAcceptCookieSelector().click();
    google.getAcceptCookieSelector().should("not.be.visible");
  });
  it("Reject Cookies", () => {
    google.getRejectCookieSelector().should("be.visible");
    google.getRejectCookieSelector().click();
    google.getRejectCookieSelector().should("not.be.visible");
  });
  it("Customise Cookie", () => {
    google.getCustomiseCookieSelector().should("be.visible");
    google.getCustomiseCookieSelector().click();
    cy.url().should("contain", "consent");
  });
});
describe("Tests of search on google", () => {
  it("Search Wikipedia with enter", () => {
    google.getAcceptCookieSelector().click().should("not.be.visible");
    google.getSearchInput().clear().type("Wikipedia").type("{enter}");
    cy.url().should("contain", "?q=Wikipedia");
  });
  it("Search Wikipedia with click on icon", () => {
    google.getAcceptCookieSelector().click().should("not.be.visible");
    google.getSearchInput().clear().type("Wikipedia");
    cy.get(".aajZCb > .lJ9FBc > center > .gNO89b").click();
    cy.url().should("contain", "?q=Wikipedia");
  });
  it("Search Wikipedia with click on element from list functions", () => {
    google.getAcceptCookieSelector().click().should("not.be.visible");
    google.getSearchInput().clear().type("Wikipedia");
    cy.get("#jZ2SBf > .wM6W7d > span").click();
    cy.url().should("contain", "?q=wikipedia");
  });
  it("Search Wikipedia with click on element from list functions - 2", () => {
    google.getAcceptCookieSelector().click().should("not.be.visible");
    google.getSearchInput().clear().type("Wikipedia").wait(1000);
    // cy.get(".wM6W7d").first();
    // cy.get(".wM6W7d").eq(-3);
    // cy.get(".G43f7e").children();
    cy.get(".erkvQe").children().children().children().eq(0).click();
    cy.url().should("contain", "?q=wikipedia");
  });
});
it("Go to site Wikipedia", () => {
  google.getAcceptCookieSelector().click().should("not.be.visible");
  google.getSearchInput().clear().type("Wikipedia");
  cy.get(".aajZCb > .lJ9FBc > center > .gNO89b").click();
  cy.url().should("contain", "?q=Wikipedia");
  cy.get('[href="https://www.wikipedia.org/"] > .LC20lb').click().wait(1000);
  cy.origin("https://www.wikipedia.org", () => {
    cy.url().should("contain", "wikipedia");
  });
});
