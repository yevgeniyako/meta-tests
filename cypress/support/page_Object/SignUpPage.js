export default class SignUpPage {
    emailField = () => cy.get('input[data-testid="royal_email"]');
    passwordField = () => cy.get('input[data-testid="royal_pass"]');
    submitBtn = () => cy.get('[data-testid="royal_login_button"]');
}
