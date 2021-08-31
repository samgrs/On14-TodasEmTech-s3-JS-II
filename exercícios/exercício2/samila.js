alert("PROMOÇÃO! LEVE DOIS PRODUTOS IGUAIS E GANHE R$5,00 DE DESCONTO!");
let p1 = Number(prompt("Insira o valor do produto 1: "));
let p2 = Number(prompt("Insira o valor do produto 2: "));

if(p1 == p2){
    let desconto = (p1 + p2) - 5
    alert(desconto);
}else{
    let sem_desconto = p1 + p2
    alert(sem_desconto);
}

alert("Está difícil ser brasileiro.");