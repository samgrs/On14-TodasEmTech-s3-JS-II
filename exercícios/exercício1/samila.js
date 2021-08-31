var letra = prompt("Insira uma letra do alfabeto: ");
var resp = letra.toUpperCase();
switch (resp == 'A' || resp ==  'E' || resp == 'I' || resp == 'O' || resp == 'U'){
    case true: alert('Você digitou uma vogal!');
        break;
    default: alert("Você digitou uma consoante!");
        break;
}   
