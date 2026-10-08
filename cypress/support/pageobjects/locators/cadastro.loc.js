export const CADASTRO_LOCATORS = {

  NOME_INPUT: () => cy.get('[data-testid="nome"]'),
  EMAIL_INPUT: () => cy.get('[data-testid="email"]'),
  SENHA_INPUT: () => cy.get('[data-testid="password"]'),
  ADMINISTRADOR_CHECKBOX: () => cy.get('[data-testid="checkbox"]'),
  CADASTRAR_BUTTON: () => cy.get('[data-testid="cadastrar"]'),
  MENSAGEM_SUCESSO: () => cy.contains('.alert', 'Cadastro realizado com sucesso'),

}