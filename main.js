const form = document.getElementById('form-contatos');
const contatos = [];
const numeros = [];
const spanAprovado = '<span class="Resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="Resultado reprovado">Reprovado</span>';

let cont = 0;
let linhas = ' ';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaTotalContatos();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if ((contatos.includes(inputNomeContato.value))) {
        alert(`ERRO! Já existe um contato com este nome.`);
    } else if ((numeros.includes(inputNumeroContato.value))) {
        alert(`ERRO! Já existe um contato com este número.`);
    } else if (length(inputNumeroContato.value)<11) {
        alert(`ERRO! Este NÃO é um número válido.`);    
    } else {

        contatos.push(inputNomeContato.value);
        numeros.push((inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
        cont += 1;

        inputNomeContato.value = '';
        inputNumeroContato.value = '';
    }
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaTotalContatos() {
    document.getElementById('total-contatos').innerHTML = cont;
}