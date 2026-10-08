Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

const gerarMassa = () => {
    
    const email = `${Math.random().toString(36).substring(2, 10)}@teste.com.br`;

    return email;
}

export default gerarMassa