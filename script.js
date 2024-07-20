const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const resultado = document.getElementById('resultado');

function somar(){
    if (numero1.value === '' || numero2.value === '') {
        alert('Por favor, preencha ambos os campos.');
        return;
    }
    let soma = Number(numero1.value) + Number(numero2.value);
    resultado.innerText = 'Resultado: ' + soma;
}

function subtrair(){
    if (numero1.value === '' || numero2.value === '') {
        alert('Por favor, preencha ambos os campos.');
        return;
    }
    let subtracao = Number(numero1.value) - Number(numero2.value);
    resultado.innerText = 'Resultado: ' + subtracao;
}

function multiplicar(){
    if (numero1.value === '' || numero2.value === '') {
        alert('Por favor, preencha ambos os campos.');
        return;
    }
    let multiplicacao = Number(numero1.value) * Number(numero2.value);
    resultado.innerText = 'Resultado: ' + multiplicacao;
}

function dividir(){
    if (numero1.value === '' || numero2.value === '') {
        alert('Por favor, preencha ambos os campos.');
        return;
    }
    if (Number(numero2.value) === 0) {
        alert('Divisão por zero não é permitida.');
        return;
    }
    let divisao = Number(numero1.value) / Number(numero2.value);
    resultado.innerText = 'Resultado: ' + divisao;
}

function limpar() {
    numero1.value = '';
    numero2.value = '';
    resultado.innerText = 'Resultado: ';
}
