/// <reference types="cypress" />

describe('Funcionalidade: Login - API', () => {
    it('Deve fazer login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'api/auth',
            body: {
                "email": "lucascypress@gmail.com",
                "password": "123456"
            }
            }).then(( response) => {
                expect(response.status).to.equal(200)
                expect(response.body).to.have.property('jwt')
            })
    });

    it('Deve validar mensagem de erro quando inserir dados inválidos', () => {
        cy.request({
            method: 'POST',
            url: 'api/auth',
            body: {
                "email": "teste@dojo.com",
                "password": "testse@123"
            },
            failOnStatusCode: false
            }).then(( response) => {
                expect(response.status).to.equal(401)
                expect(response.body.errors[0].msg).to.equal("Credenciais inválidas")
            })
    });
})