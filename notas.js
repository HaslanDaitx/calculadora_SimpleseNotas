const Ap1 = document.getElementById('Ap1');
const Ap2 = document.getElementById('Ap2');
const AS = document.getElementById('AS');
const ResultadoFinal = document.getElementById('ResultadoFinal');
const NotaAp1 = document.getElementById('NotaAp1');
const NotaAp2 = document.getElementById('NotaAp2');
const NotaAS = document.getElementById('NotaAS');

function verificarNota(campo, min, max, errorSpan) {
    let valor = Number(campo.value);
    if (isNaN(valor) || valor < min || valor > max) {
        errorSpan.innerText = `Nota inválida! A nota deve estar entre ${min} e ${max}.`;
        campo.value = '';
        campo.focus();
        return false;
    } else {
        errorSpan.innerText = '';
    }
    return true;
}

function calcularNota() {
    if (Ap1.value === '' || Ap2.value === '' || AS.value === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    if (!verificarNota(Ap1, 0, 1.5, NotaAp1)) return;
    if (!verificarNota(Ap2, 0, 2.5, NotaAp2)) return;
    if (!verificarNota(AS, 0, 6, NotaAS)) return;

    let notaFinal = Number(Ap1.value) + Number(Ap2.value) + Number(AS.value);

    if (notaFinal >= 6) {
        ResultadoFinal.style.color = 'green';
        ResultadoFinal.innerText = `A sua nota foi ${notaFinal}. Aprovado, Parabéns!`;
    } else {
        ResultadoFinal.style.color = 'red';
        ResultadoFinal.innerText = `A sua nota foi ${notaFinal}. Você foi Reprovado! \nReforce seus estudos para fazer a AF.`;
    }
}

function limpar() {
    Ap1.value = '';
    Ap2.value = '';
    AS.value = '';
    ResultadoFinal.innerText = '';
    NotaAp1.innerText = '';
    NotaAp2.innerText = '';
    NotaAS.innerText = '';
}
