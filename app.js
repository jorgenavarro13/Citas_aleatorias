// Mostrar una cita aleatoria
let i=Math.floor(Math.random()*citas.length);

const cita=document.getElementById('cita');
const autor=document.getElementById('autor');
const boton=document.getElementById('boton');

function cambiaCita(){
    let i=Math.floor(Math.random()*citas.length);
    cita.innerText=`"${citas[i].cita}"`;
    autor.innerText=`${citas[i].autor}`;
}

cambiaCita();

boton.addEventListener('click', cambiaCita);

