import SignUpPage from "../../cypress/support/page_Object/SignUpPage";
const signUpPage = new SignUpPage();

const generateEmail = () => `newUser${Math.floor(Math.random() * 1000)}@gmail.com`
const testEmail = generateEmail()

describe('LOGIN PAGE SMOKE TEST NEGATIVE', () => {
    describe('Preconditions - Visit login page', () => {
        it('Visit login page and check that the page was loaded', () => {
            cy.visit('/')
        })
        it('User was redirected on the login page', () => {
            cy.location('pathname').should('eq', '/')
        })
        it('Page title should be visible', () => {
            cy.title().should('include', 'Facebook')
        })
    })
    describe('Email field', () => {
        it('should be visible', () => {
            signUpPage.emailField().should('be.visible')
        })
        it('type data', () => {
            signUpPage.emailField().type(testEmail)
        })
        it('field have value', () => {
            signUpPage.emailField().should('have.value', testEmail)
        })
    })
    describe('password field', () => {
        it('should be visible', () => {
            signUpPage.passwordField().should('be.visible')
        })
        it('type data', () => {
            signUpPage.passwordField().type('123123')
        })
        it('field have value', () => {
            signUpPage.passwordField().should('have.value', '123123')
        })
    })
    describe('submit btn', () => {
        it('should be clicked', () => {
            signUpPage.submitBtn().click()
        })
    })
})