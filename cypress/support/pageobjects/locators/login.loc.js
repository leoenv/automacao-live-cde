export const LOGIN_LOCATORS = {
  
  
  EMAIL_INPUT: () => cy.get('[data-testid="email"]'),
  SENHA_INPUT: () => cy.get('[data-testid="senha"]'),
  ENTRAR_BUTTON: () => cy.get('[data-testid="entrar"]'),
  CADASTRE_SE_BUTTON: () => cy.get('[data-testid="cadastrar"]'),

}