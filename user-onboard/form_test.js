describe("Form app", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234")
    });
});

const textInput = () => cy.get('input[name="text"]');
const emailInput = () => cy.get('input[name="email"]');
const passInput = () => cy.get('input[name="password"]');
const termsInput = () => cy.get('input[name="termsOfService]');

it("sanity test", () => {
    expect(1+1).to.equal(2);
    expect(1+1).not.to.equal(3);
});

it("Typing in input fields", () => {
    textInput
    .should("have.value", "")
    .type("name")
    .should("have.value", "name")

    emailInput
    .should("have.value", "")
    .type("name@name.com")
    .should("have.value", "name@name.com")

    passInput
    .should("have.value", "")
    .type("name")
    .should("have.value", "name")
});

it("Checking Checkbox", () => {
    termsInput
    .check()
});
 it("Submit Button", () => {
     cy.get('button["button]')
     .click();
 })
