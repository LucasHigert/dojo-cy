/// <reference types="cypress" />
import usuario from "../../fixtures/usuario.json"

describe('Funcionalidade: Login', () => {
    
    beforeEach(() => {
    cy.visit('login')
    });

    
    afterEach(() => {
       cy.screenshot() 
    });

    it('deve fazer login com sucesso', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('lucascypress@gmail.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Lucas Cypress')
    });

    it('deve validar mensagem de erro ao fazer login com dados inválidos', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('lucascypress@gmail.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('1234567')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
    });

    it('deve fazer login com sucesso - Usando commands', () => {
        cy.login('lucascypress@gmail.com', '123456')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Lucas Cypress')
    });
    
    it('Deve fazer login com sucesso usando Massa de dados', () => {
        cy.login(usuario.usuario, usuario.senha)
        console.log(usuario.usuario)
        cy.get('[data-test="dashboard-welcome"]').should('contain', usuario.nome)
    });
    
    it('Deve fazer login com sucesso usando Fixture', () => {
        cy.fixture("multi-usuarios").then((multi) => {
            cy.login(multi[0].usuario, multi[0].senha)
            cy.get('[data-test="dashboard-welcome"]').should('contain', multi[0].nome)
        })
    });
});