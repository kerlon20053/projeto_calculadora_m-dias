const form = document.getElementByld('form-atividade');
const imgAprovado = '<img scr= "./imagens/emoji festejando.jpg alt=emoji celebrando" />';
const imgReprovado = '<img scr= "./imagens/emoji triste.jpg alt=emoji deprimido />';
const atividades[]
const nota[]
const spanAprovado = '<span class = "resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class = "resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('digite a nota mínima:')); 
    

let linhas = '';
form.addEventListener('submit', function(e) {
    e.preventdefalt();

    adicionalinha();
    atualizartabela();
    atualizarMediafinal();



});
    
function adicionalinha() {
    const imputNomeAtividade = document.getElementById('nome-atividade');
    const imputNotaAtividade = document.getElementById('nota-atividade');
    
    if(atividades.incluides(imputNomeAtividade.value)); {
    alert (` A atividade: ${imputNomeAtividade.value} já foi inserida`);
    } else { 
    atividades.push(imputNomeAtividade.value);
    notas.push(parseFloat(imputNotaAtividade.value));
    
    let linha = '<tr>'
    linha += `<td>${imputNomeAtividade.value}</td>`;
    linha += `<td>${imputNotaAtividade.value}</td>`;
    linha += `<td>${imputNotaAtividade.value >=7 ? imgAprovado  : imgReprovado }</td>`;
    linha += `</tr>`;
    
    linhas += linha;
    }
    const corpotabela = document. querySelector('tbody');
    corpotabela.innerHTML = linhas;
    alert(`atividade: ${imputNomeAtividade.value} - nota: ${imputNotaAtividade.value}`);

    imputNomeAtividade.value = '';
    imputNotaAtividade.value = '';
    


function atualizartabela() {
    const corpotabela = document.querySelector(`tbody`);
    corpotabela.innerHTML = linhas;
}

function atualizarMediafinal() {
const mediafinal = calculaMediafinal();

document.getElementById('média-final-valor').innerHTML = mediafinal;
document.getElementById('média-final-resultado').innerHTML = mediafinal >= notaminima ? spanAprovado: spanReprovado ;
}

function calculaMediafinal() {
    let somaDasNotas = 0;


    for(let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }
    
    return somaDasNotas / notas.length;
}

