describe("Bethany's Pie Shop Homepage", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the home container", () => {
    cy.get("[data-testid=home-container]").should("exist");
  })

  it("renders the pies section, and shows pies", () => {
    cy.get("[data-testid=pies-section]").should("exist");
    cy.get("[data-testid=pie-item]").should("have.length.greaterThan", 0);
  })

  it("renders the hero carousel with all slides", () => {
    cy.get("[data-testid=hero-carousel]").should("exist");
    cy.get("[data-testid=carousel-slide]").should("have.length", 3);
  });

  it("lists all pies of the month with name and price", () => {
    cy.get("[data-testid=pie-item]").each(($el) => {
      cy.wrap($el).find("h3").should("exist"); // Pie name
      cy.wrap($el).find("p").contains("$").should("exist"); // Price
    });
  });

  it("can add a pie of the month to the cart", () => {
    cy.get("[data-testid=pie-item]").first().within(() => {
      cy.contains("button", "Add to Cart").click();
    });
    cy.get("[data-testid=cart-count]").should("have.length", 1);
  });

  it("Clicking on Show Now on carousal will navigate to /shop page", () => {
    cy.get("[data-testid=carousal-shop-button").first().click();
    cy.url().should("include", "/shop");
  });

  it("Clicking on Shop in the navigation will show the dropdown menu", () => {
    cy.get("[data-testid=shop-dropdown]").should("not.be.visible");
    cy.contains("button", "Shop").trigger("mouseover").should("be.visible");
  });
  
  it("Navigate to All Pies", () => {
    cy.contains("button", "Shop").trigger("mouseover");
    cy.get("[data-testid=shop-dropdown]")
      .should("be.visible")
      .contains("shop")
      .click();
    cy.url().should("include", "/shop");
  });

  it("Navigate to Fruit Pies", () => {
    cy.get("[data-testid=shop-dropdown]").trigger("mouseover").select("Fruit Pies").click().should("include", "/shop/fruit");
  });

  it("Navigate to Seasonal Pies", () => {
    cy.get("[data-testid=shop-dropdown]").trigger("mouseover").select("Seasonal Pies").click().should("include", "/shop/seasonal");
  });
});