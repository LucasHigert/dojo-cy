/// <reference types="cypress" />
const faker = require('faker-br');

describe('Funcionalidade: Cadastro do Conexão QA', () => {
    beforeEach(() => {
        cy.visit('https://conexaoqa.herokuapp.com/cadastrar')
    });

    it('Deve fazer cadastro com sucesso', () => {
        let email = faker.internet.email()
        let usuario = faker.internet.userName()

        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(usuario)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('1234567')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('1234567')
        cy.get('[data-test="register-submit"]').click()

        cy.get('[data-test="dashboard-createProfile"]').should('be.visible')
        cy.get('[data-test="dashboard-welcome"]').should('contain', usuario)
    });
});