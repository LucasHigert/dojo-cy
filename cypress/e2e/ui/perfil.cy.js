/// <reference types="cypress" />
const faker = require('faker-br');

describe('Funcionalidade: Perfil do Conexão QA', () => {
    beforeEach(() => {
        cy.visit('https://conexaoqa.herokuapp.com/cadastrar')
    });

    it('Deve criar perfil com sucesso', () => {
        let email = faker.internet.email()
        let usuario = faker.internet.userName()
        let cidade = faker.address.city()
        let empresa = faker.company.companyName()
        cy.criarPerfil(email, usuario, cidade, empresa, '1234567', 'https://conexaoqa.herokuapp.com', 'Testes E2E',`Olá meu nome é ${usuario} e tenho 22 anos`)
    });
});