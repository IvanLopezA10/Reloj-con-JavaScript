const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formatoHora( fecha.getHours() );
    let min = formatoHora( fecha.getMinutes() );
    let seg = formatoHora( fecha.getSeconds() );
    document.querySelector('#hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Dicimbre'];
    const dias =['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let diasemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes =  meses[fecha.getMonth()];
    let anio = [fecha.getFullYear()];
    let fechaTexto = `${diasemana}, ${dia}/${mes}/${anio}`;
    document.querySelector('#fecha').innerHTML = fechaTexto;
    document.querySelector('#contenedor').classList.toggle('animar');
}

const formatoHora = hora =>{
    if (hora < 10){
        hora = `0${hora}`;
    }
    return hora;
}
setInterval(mostrarReloj, 1000);