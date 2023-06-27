class googlePage {
  AcceptCookieSelector = "#L2AGLb > .QS5gu";
  _SearchInputSelector = "#APjFqb";
  RejectCookieSelector = "#W0wltc > .QS5gu";
  CustomiseCookieSelector = ".eOjPIe";

  getAcceptCookieSelector() {
    return cy.get(this.AcceptCookieSelector);
  }

  getSearchInput() {
    return cy.get(this._SearchInputSelector);
  }

  typeInSearchInput(text) {
    return this.getSearchInput().clear().type(text);
  }

  getRejectCookieSelector() {
    return cy.get(this.RejectCookieSelector);
  }

  getCustomiseCookieSelector() {
    return cy.get(this.CustomiseCookieSelector);
  }
}
export default googlePage;
