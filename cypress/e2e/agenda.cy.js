    describe('Agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    const criarContato = (nome) => {
        cy.get('input[placeholder="Nome"]').type(nome)
        cy.get('input[placeholder="E-mail"]').type('teste@teste.com') // fixo
        cy.get('input[placeholder="Telefone"]').type('11999999999')
        cy.contains('Adicionar').click()
    }

    it('deve adicionar um novo contato', () => {
        const nome = `Teste Cypress ${Date.now()}`

        criarContato(nome)

        cy.contains(nome).should('exist')
    })

    it('deve editar um contato', () => {
        const nome = `Teste Cypress ${Date.now()}`

        criarContato(nome)

        cy.contains(nome)
        .parents()
        .contains('Editar')
        .click()

        cy.get('input[placeholder="Nome"]')
        .clear()
        .type('Teste Editado')

        cy.contains('Salvar').click()

        cy.contains('Teste Editado').should('exist')
    })

    it('deve remover um contato', () => {
        const nome = `Teste Cypress ${Date.now()}`

        cy.intercept('DELETE', '**/contatos').as('deleteContato')

        criarContato(nome)

        cy.contains(nome)
        .parents()
        .contains('Deletar')
        .click()

        cy.wait('@deleteContato')

        cy.reload()

        cy.contains(nome).should('not.exist')
    })
    })