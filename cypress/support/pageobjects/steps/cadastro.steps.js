import {CADASTRO_LOCATORS} from '../locators/cadastro.loc.js'
import {LOGIN_LOCATORS} from '../locators/login.loc.js'
import gerarMassa from '../../commands'
class cadastroSteps {

    acessarCadastroPage() {
        LOGIN_LOCATORS.CADASTRE_SE_BUTTON().should('be.visible')
        LOGIN_LOCATORS.CADASTRE_SE_BUTTON().click()
        CADASTRO_LOCATORS.CADASTRAR_BUTTON().should('be.visible')   

    }

    cadastrarUsuarioValido() {
        CADASTRO_LOCATORS.NOME_INPUT().should('be.visible').type('Leonardo')
        CADASTRO_LOCATORS.EMAIL_INPUT().should('be.visible').type(gerarMassa())
        CADASTRO_LOCATORS.SENHA_INPUT().should('be.visible').type('teste123')
        CADASTRO_LOCATORS.ADMINISTRADOR_CHECKBOX().should('be.visible').check()
        CADASTRO_LOCATORS.CADASTRAR_BUTTON().should('be.visible').click()

    
    }
    validarCadastroComSucesso() {
        CADASTRO_LOCATORS.MENSAGEM_SUCESSO().should('be.visible')

        // O fluxo cadastra um administrador e faz login automaticamente.
        cy.location('pathname', { timeout: 10000 }).should('eq', '/admin/home')
        cy.contains('h1', /Bem Vindo\s+Leonardo/).should('be.visible')
        cy.get('[data-testid="logout"]').should('be.visible')
    }

}

export default new cadastroSteps()