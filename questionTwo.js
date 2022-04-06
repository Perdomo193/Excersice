function reverso(input) {
    let reversoArray = new Array;
    for(let i = input.length-1; i >= 0; i--) {
        reversoArray.push(input[i]);
    }
    return reversoArray;
}

const entradante = [2, 4, 6, 8]
const resultado = reverso(entradante);

console.log(entradante);
console.log(resultado);