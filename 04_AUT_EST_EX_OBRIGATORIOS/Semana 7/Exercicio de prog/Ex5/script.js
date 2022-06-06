let numero = 0;

function Alunos() {
    document.getElementById('dados').innerHTML = '';
    numero = 0;
    numero = document.getElementById('quantidade').value;
    numero = Number(numero);
    for (let i = 0; i < numero; i++) {
        document.getElementById('dados').innerHTML += `<input type="number" id="notaProva${i}" placeholder="Nota da prova">
        <input type="number" id="notaTrabalho${i}" placeholder="Nota do trabalho"><br>`
    }
}

function calcular() {
    const notasProvas = [];
    const notasTrabalho = [];
    const mediaDeCadaAluno = [];
    let mediaIndividual = 0;  
    let mediaAritmetica = 0;
    let mediaAritmeticaTrabalho = 0
    for (let i = 0; i < numero; i++) {
        let nota = Number(document.getElementById(`notaProva${i}`).value);
        notasProvas.push(nota);
        let trabalho = Number(document.getElementById(`notaTrabalho${i}`).value);
        notasTrabalho.push(trabalho);        
    } for (let aluno = 0; aluno < numero; aluno++) {
        let prova = Number(notasProvas[aluno]);
        let trabalho = Number(notasTrabalho[aluno]);
        let mediaIndividual = ((prova*2)+(trabalho*3))/5;
        mediaDeCadaAluno.push(mediaIndividual);        
    } for (let aluno = 0; aluno < numero; aluno++) {
        let prova = Number(notasProvas[aluno]);
        let trabalho = Number(notasTrabalho[aluno]);
        mediaIndividual = mediaIndividual + (prova+trabalho)/2; 
    } for (let aluno = 0; aluno < numero; aluno++) {
        let prova = Number(notasProvas[aluno]);
        mediaAritmetica += prova;      
    }  for (let aluno = 0; aluno < numero; aluno++) {
        let trabalho = Number(notasTrabalho[aluno]);
        mediaAritmeticaTrabalho += trabalho;      
    }
    document.getElementById('display').innerHTML = `
    <h2>Média de cada Aluno: ${mediaDeCadaAluno}</h2>\n
    <h2>Média geral: ${mediaIndividual/numero}</h2>\n
    <h2>Média aritmética das notas da prova: ${mediaAritmetica/numero}</h2>\n
    <h2>Média aritmética das notas de trabalho: ${mediaAritmeticaTrabalho/numero}</h2>\n
    <h2>Maior nota da prova: ${Math.max(... notasProvas)}</h2>\n
    <h2>Menor nota da prova: ${Math.min(... notasProvas)}</h2>\n
    <h2>Maior nota do trabalho: ${Math.max(... notasTrabalho)}</h2>\n
    <h2>Menor nota da trabalho: ${Math.min(... notasTrabalho)}</h2>\n
    `
}