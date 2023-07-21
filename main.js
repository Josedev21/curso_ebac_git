const form = document.getElementById('form-valided');
const contaInput = document.getElementById('valor-conta')
const saqueInput = document.getElementById('valor-saque')
let formvalided = false

function validasaque() {
    const conta = parseInt(contaInput.value);
    const saque = parseInt(saqueInput.value);

    if (conta > saque) {

        const mensagemdesucesso = `Foi sacado de sua conta: R$ ${saque}.`

        const containermensagem = document.querySelector('.sucesso-mensage');
        containermensagem.innerHTML = mensagemdesucesso;
        containermensagem.style.display = 'block';
        
        contaInput.value = ' ';
        saqueInput.value = ' ';
    } else {
        contaInput.style.border = '1px red solid';
        document.querySelector('.error-message').style.display = 'block'
        console.log('sem saldo')
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    validasaque()
})

contaInput.addEventListener('change', function(e) {
    console.log(e.target.value);
    formvalided = validasaque(e.target.value);
})

if (!formvalided) {

    contaInput.classList.add('.error-message');
    contaInput.style.border = '1px red solid';
    document.querySelector('.error-message').style.display = 'block';

} else {

    contaInput.classList.remove('.error-message');
    document.querySelector('.error-message').style.display = 'none';

}