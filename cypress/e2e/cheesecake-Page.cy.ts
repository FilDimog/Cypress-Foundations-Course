describe("Bethany's Pie Shop Homepage", () => {

  beforeEach(() => {
    cy.visit("/shop/cheesecake");
  });

    it("check URL", () => {
        cy.url().should("include", "/shop/cheesecake");
    });

    it ("renders cheesecake pies section", () => {
        cy.get("h1").should("contain.text", "Cheesecakes");
    });

    it("renders the cheesecake pies container", () => {
        cy.get("[data-testid=pie-item]").each(($el) => {
            cy.wrap($el).find("h3").should("exist");
            cy.wrap($el).find("p").contains("$").should("exist");
            cy.wrap($el).find("button").contains("Add to Cart").should("be.visible").and("be.enabled");
        });
    }); 

  });