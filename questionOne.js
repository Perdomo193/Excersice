let horarios = [
    { 'nombre': 'juan', 'hora': 100 },
    { 'nombre': 'andres', 'hora': 101 },
    { 'nombre': 'carlos', 'hora': 102 },
    { 'nombre': 'catalina', 'hora': 103 },
    { 'nombre': 'jorge', 'hora': 104 }
]

horarios.forEach(element => {
    if(element.nombre == 'carlos') element.hora += 20
    if(element.nombre == 'jorge') element.hora -= 20
});

let refJorge = null
let refJuan = null

horarios.forEach(element => {
    if(element.nombre == 'jorge') refJorge = element.hora
    if(element.nombre == 'juan') refJuan = element.hora
});

horarios.forEach(element => {
    if(element.nombre == 'catalina') {
        if (refJorge > refJuan) element.hora = (Math.abs(refJorge - refJuan))/2 + refJuan
        element.hora = (Math.abs(refJorge - refJuan))/2 + refJorge
    }
});

function MyMin(myarr){
    var al = myarr.length;
    minimo = myarr[al-1];
    while (al--){
        if(myarr[al].hora < minimo.hora){
            minimo = myarr[al]
        }
    }
    return minimo;
};

let min = MyMin(horarios);

function MyMax(myarr){
    var al = myarr.length;
    maximo = myarr[al-1];
    while (al--){
        if(myarr[al].hora > maximo.hora){
            maximo = myarr[al]
        }
    }
    return maximo;
};

let max = MyMax(horarios);

console.log('Llego más tarde', max)
console.log('Llego más temprano', min)
console.log(horarios);
