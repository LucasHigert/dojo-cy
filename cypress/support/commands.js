// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import user from "../fixtures/multi-usuarios.json"

Cypress.Commands.add('login', () => {
    cy.visit('login')
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(user[0].usuario)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(user[0].senha)
    cy.get('[data-test="login-submit"]').click()
 })

 Cypress.Commands.add('token', () => {
    cy.request({
        method: 'POST',
        url: 'api/auth',
        body: {
            "email": user[0].usuario,
            "password": user[0].senha
        }
        }).then(( response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property("jwt")
            expect(response.duration).be.lte(300)
        })
 })

 Cypress.Commands.add('criarPerfil', (email, usuario, cidade, empresa, senha, url, skill, message) => {
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(usuario)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-submit"]').click()

    cy.get('[data-test="dashboard-createProfile"]').click()
    cy.get('#mui-component-select-status').click()
    cy.contains('QA Pleno').click()
    cy.get('[data-test="profile-company"]').type(empresa)
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(url)
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(cidade)
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(skill)
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(usuario)
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(message)
    cy.get('[data-test="profile-submit"]').click()
 })