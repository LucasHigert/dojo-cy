describe('Teste de API', () => {
    var dojo = {
        aula: "API",
        duracao: 3,
        professor: "Fábio"
    }
    var frutas = ["banana", "maça", "uva"]

    var usuarios =  [
        {
            "nome": "Lucas Cypress",
            "usuario":"lucascypress@gmail.com", 
            "senha":"123456"
        },
        {
            "nome": "Lucas Cypress",
            "usuario":"lucascypress2@gmail.com", 
            "senha":"1234567"
        },
        {
            "nome": "Lucas Cypress",
            "usuario":"lucascypress3@gmail.com", 
            "senha":"1234567"
        }
    ]


    it('Teste DOJO', () => {
        expect(dojo.aula).to.equal("API")
        expect(dojo.duracao).to.equal(3)
        expect(dojo.professor).to.equal("Fábio")
    });
    
    it('Deve validar o retorno dos usuários', () => {
        expect(usuarios[0].nome).to.equal("Lucas Cypress")
    });
})