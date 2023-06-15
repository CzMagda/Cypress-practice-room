/// <reference types="cypress" />
import searchQuery from "../../fixtures/uwb_search.json";

Cypress.Commands.add("closeCookiePopUp", () => {
  cy.get(".close_c").click().should("not.be.visible");
});

beforeEach("setup", () => {
  cy.visit("https://uwb.edu.pl/");
  cy.url().should("contain", "uwb");
  cy.get('[href="/wyszukiwarka"]').as("searchEngine");
});

describe("Initial tests on the UwB website - footer", () => {
  it("Click tab media about us in May", () => {
    cy.get(":nth-child(3) > .block-content > ul > :nth-child(3) > a").click();
    cy.get(":nth-child(1) > .dropdown-nav > :nth-child(2) > a").click();
    cy.get(".page-description > :nth-child(7) > a").click();
    cy.origin(
      "https://www.bialystokonline.pl/ciekawie-po-prawie-czyli-dzien-otwarty-na-wydziale-prawa-uwb,artykul,136386,6,1.html",
      () => {
        cy.url().should("contain", "bialystokonline");
      }
    );
  });

  it("Click tab university structure and choose - Katarzyna Łempicka", () => {
    cy.get(":nth-child(3) > .block-content > ul > :nth-child(5) > a").click();
    cy.get('[href="/struktura-uczelni/index,administracja-centralna-dzial-nauki.html"]').click();
    cy.get("#employees > :nth-child(7) > :nth-child(1) > a").click();
    cy.url().should("contain", "Katarzyna");
  });

  it("Click tab computer apps and return", () => {
    cy.get('[href="https://dak.uwb.edu.pl/"]').click();
    cy.get(":nth-child(7) > h2").click();
    cy.get(".col-lg-9 > .btn").click();
    cy.url().should("contain", "aktualnosci");
  });

  it("Click tab website map and choose- Kadencje Władz Rektorskich", () => {
    cy.get(":nth-child(3) > .block-content > ul > :nth-child(4) > a").click();
    cy.get(":nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(3) > a > span").click();
    cy.url().should("contain", "kadencje");
  });
});

describe("Initial tests about the most important tabs on UwB website", () => {
  it("Test about tab UwB - about us", () => {
    cy.get("#drop1").click();
    cy.get("#dropped-drop1 > :nth-child(1) > .dropped-menu-column-box > :nth-child(1) > a > .title").click();
    cy.get(".dropdown-nav > .last > a").click();
    cy.get(".dropdown-nav > :nth-child(11) > a").click();
    cy.url().should("contain", "jerzy");
    cy.get(".lightbox > img").click();
    cy.get(".lightbox > img").should("be.visible");
  });

  it("Test about tab candidate - foreigners", () => {
    cy.get(".main-menu > :nth-child(3) > a > span").click();
    cy.get(".side-menu > :nth-child(7) > a").click();
    cy.get(".dropdown-nav > .last > a").click();
    cy.get(".last > .dropdown-nav > .first > a").click();
    cy.url().should("contain", "oplaty");
  });

  it("Test about tab student - Erasmus +", () => {
    cy.get(".main-menu > :nth-child(5) > a > span").click();
    cy.get(".side-menu > :nth-child(13) > a").click();
    cy.url().should("contain", "erasmus");
    cy.get(".dropdown-nav > .first > a").click();
    cy.get(".page_content > :nth-child(13) > a").click();
    cy.url().should("contain", "wspolpraca");
  });

  it("Test about tab employee - public precurement", () => {
    cy.get(".main-menu > :nth-child(7) > a > span").click();
    cy.get(".side-menu > :nth-child(12) > a").click();
    cy.get(".dropdown-nav > :nth-child(5) > a").click();
    cy.url().should("contain", "akty");
  });
});

describe("Tests about searching", () => {
  it("Click on advanced search", () => {
    cy.get(".name > .d-none").click();
    cy.get("@searchEngine").click();
    cy.url().should("contain", "wyszukiwarka");
  });

  it("Search about us with enter", () => {
    cy.get(".name > .d-none").click();
    cy.get("@searchEngine").click();
    cy.get("#query").clear().type(searchQuery.query).type("{enter}");
    cy.url().should("contain", searchQuery.query);
  });

  it("Search about us with click on icon", () => {
    cy.get(".name > .d-none").click();
    cy.get("@searchEngine").click();
    cy.get("#query").clear().type(searchQuery.query2);
    cy.get(".tab-pane > .input-group > .input-group-append > .btn-primary").click();
    cy.url().should("contain", searchQuery.query2);
  });

  it("Test about reset", () => {
    cy.get(".name > .d-none").click();
    cy.get("@searchEngine").click();
    cy.get("#query").clear().type("nas");
    cy.get(".tab-pane > .input-group > .input-group-append > .btn-primary").click().wait(1000);
    cy.get(".btn-secondary").click();
  });
});
