var inicial;
var mesAMes;
var juros;
var tempo;
var resultado_tabela;
var cont;

function calcular(){
    if(cont>0){
        inicial = 0
        mesAMes = 0
        juros= 0
        tempo = 0
        resultado_tabela.innerHTML = "";
    }


    inicial = document.querySelector('#valor_inicial');
    mesAMes = document.querySelector('#valor_mes');
    juros= document.querySelector('#taxa');
    tempo = document.querySelector('#tempo');
    resultado_tabela = document.querySelector('#resultado_tabela');


    var semjuros = 0.000;
    var comjuros = 0.000;
    var juros_mes = 0;


    inicial = parseInt(inicial.value);
    mesAMes = parseInt(mesAMes.value);
    juros = parseFloat(juros.value);
    tempo = parseInt(tempo.value);
    //resultado.innerHTML += `inicial - ${inicial}, mes a mes - ${mesAMes}, juros - ${juros}, tempo - ${tempo}`

    //resultado.innerHTML += "Olá Mundo!";
    juros_mes = (juros / 12)/100;
    semjuros = inicial;
    comjuros = inicial;
    //resultado.innerHTML += `valor inicial ${inicial.value}, por mês ${mesAMes.value}, taxa de juros ${juros.value}, taxa de juros ao mês ${juros_mes.toFixed(2)}, tempo ${tempo.value}`;
    for(cont = 0; cont <= tempo; cont++){
        resultado_tabela.innerHTML += `<td>${cont}</td> <td>${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(mesAMes)}</td> <td>${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(semjuros)}</td> <td>${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(comjuros)}</td>`;
        
        if(comjuros < inicial){comjuros = inicial}
        if(semjuros < inicial){semjuros = inicial} else {semjuros += mesAMes;}
        comjuros = comjuros + mesAMes +(comjuros * juros_mes);
    } 
} 

function limpar(){
    inicial = 0
    mesAMes = 0
    juros= 0
    tempo = 0
    resultado_tabela.innerHTML = "";
}