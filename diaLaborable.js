const [, , dia, mes, anio] = process.argv;

let fecha = new Date(Number(anio), Number(mes), Number(dia));

let dia1 = fecha.getDay();

if (dia1 >= 1 && dia1 <= 2) {
    console.log('Dia No Laborable');
}else{
    console.log('Dia Laborable');
}