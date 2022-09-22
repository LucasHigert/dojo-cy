/// <reference types="cypress" />
describe('Funcionalidade: Login - API', () => {

    let token
    beforeEach(() => {
        cy.token().then((tkn) => {
            token = tkn
        })
    })

    it('Deve criar perfil com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'api/profile',
            body: {
                "company": "Dojo",
                "status": "QA Sênior",
                "location": "SP",
                "website": "https://pokeapi.co/docs/v2",
                "skills": "Java script",
                "bio": "Formado em TI na FIAP...",
                "githubusername": "lucashigert"
              }
            }).then(( response) => {
                expect(response.status).to.equal(200)
                expect(response.body.jwt).to.have.property("jwt")
                expect(response.body.jwt).be.lte(300)
            })
    });

})