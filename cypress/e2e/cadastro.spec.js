import cadastroSteps from '../support/pageobjects/steps/cadastro.steps.js'

describe('Cadastro Feature', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.clearAllCookies()
    cy.clearAllLocalStorage()

  })

    it('Deve validar o cadastro de usuário', () => {
        cadastroSteps.acessarCadastroPage()
        cadastroSteps.cadastrarUsuarioValido()
        cadastroSteps.validarCadastroComSucesso()
})

})
