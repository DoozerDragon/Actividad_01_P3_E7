// Ejercicio 1: Suma de números impares del 1 al 100
let sumaImpares = 0;
let i = 1;
while (i <= 100) {
    if (i % 2 !== 0) {
        sumaImpares += i;
    }
    i++;
}
document.getElementById('resultadoSuma').textContent = `La suma de todos los números impares del 1 al 100 es: ${sumaImpares}`

// Ejercicio 2: Mostrar asteriscos
document.getElementById('asteriscosForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numero = parseInt(document.getElementById('numeroAsteriscos').value);
    let asteriscos = '';
    for (let i = 0; i < numero; i++) {
        asteriscos += '*';
    }
    document.getElementById('resultadoAsteriscos').textContent = asteriscos;
})

// Ejercicio 3: Tablas de multiplicar del 1 al 10
let tablas = '';
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        tablas += `${i} x ${j} = ${i * j}\n`;
    }
    tablas += '\n';
}
document.getElementById('resultadoTablas').textContent = tablas;