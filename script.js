

// Variables globales
let temporizador;
let enEjecucion = false;
let milisegundos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

// Selección de elementos 
const TEXTOHORA = document.querySelector('.hora');
const TEXTOMINUTOS = document.querySelector('.minutos');
const TEXTOSEGUNDOS = document.querySelector('.segundos');
const TEXTOMILI = document.querySelector('.milisegundos');
const botonIniciar = document.querySelector('.iniciar');
const botonPausar = document.querySelector('.pausar');
const botonReiniciar = document.querySelector('.reiniciar');

// Función para actualizar el cronómetro esta funcion ayuda a que no se pase por ejemplo a 70 segundos si no que quede siempre en 60
function actualizarTiempo() {
    milisegundos++;
    if (milisegundos >= 100) {
        milisegundos = 0;
        segundos++;
    }
    if (segundos >= 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos >= 60) {
        minutos = 0;
        horas++;
    }

    // Actualizar el 
    TEXTOHORA.textContent = String(horas).padStart(2, '0');
    TEXTOMINUTOS.textContent = String(minutos).padStart(2, '0');
    TEXTOSEGUNDOS.textContent = String(segundos).padStart(2, '0');
    TEXTOMILI.textContent = String(milisegundos).padStart(2, '0');
}

// Función para iniciar el cronómetro
function iniciarTemporizador() {
    if (!enEjecucion) {
        enEjecucion = true;
        temporizador = setInterval(actualizarTiempo, 10); // Actualiza cada 10 milisegundos
        botonIniciar.disabled = true;
        botonPausar.disabled = false;
    }
}

// Función para pausar el cronómetro
function pausarTemporizador() {
    if (enEjecucion) {
        enEjecucion = false;
        clearInterval(temporizador);
        botonIniciar.disabled = false;
        botonPausar.disabled = true;
    }
}

// Función para reiniciar el cronómetro
function reiniciarTemporizador() {
    enEjecucion = false;
    clearInterval(temporizador);
    milisegundos = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    
    // Actualizar con valores iniciales
    TEXTOHORA.textContent = '00';
    TEXTOMINUTOS.textContent = '00';
    TEXTOSEGUNDOS.textContent = '00';
    TEXTOMILI.textContent = '00';
    
    botonIniciar.disabled = false;
    botonPausar.disabled = true;
}

// Asignar eventos a los botones
botonIniciar.addEventListener('click', iniciarTemporizador);
botonPausar.addEventListener('click', pausarTemporizador);
botonReiniciar.addEventListener('click', reiniciarTemporizador);