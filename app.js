/**
 * Simulador de operadores lógicos
 * @author João Fonseca 
 */

// variáveis
let receive // Variável que altera o valor recebido pela função
let sw1 = false // Variáveis usadas na lógica para ligar e desligar as chaves e também na lógica para acender ou apagar a lâmpada.
let sw2 = false

// Variável para capturar a página html
let identify = window.location.pathname
console.log(identify) // apoio ao entendimento da lógica (página html)
// Variável para identificar a quebra da lâmpada
let broken = false

function sw(receive) {
    //console.log(receive) // Apoio a lógica (teste da função)

    // Lógica das Chaves
    if (receive === 1 && sw1 === false) {
        document.getElementById('sw1').src = "img/swon.png"
        sw1 = true
    } else if (receive === 1 && sw1 === true) {
        document.getElementById('sw1').src = "img/swoff.png"
        sw1 = false

    } else if (receive === 2 && sw2 === false) {
        document.getElementById('sw2').src = "img/swon.png"
        sw2 = true
    } else if (receive === 2 && sw2 === true) {
        document.getElementById('sw2').src = "img/swoff.png"
        sw2 = false
    }

    // Lógica para quebrar a lâmpada
    if (receive === 3) {
        // reproduzindo áudio no JS
        let beep = new Audio()
        beep.src = "glassbreaking.wav"
        beep.play()
        document.getElementById("lamp").src = "img/broken.jpg"
        broken = true
    }

    // ATENÇÃO!!! NO GITHUB, ACRESCENTAR O NOME DO REPOSITÓRIO ANTES DA PÁGINA NAS ESTRUTURAS ABAIXO: EX: /simulador/and.html no lugar de /and.html 

    // Lógica do operador AND
    if (identify === "/simulador/and.html" && broken !== true) {
        if (sw1 === true && sw2 === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        } else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    }

    // Lógica do operador OR
    if (identify === "/simulador/or.html" && broken !== true) {
        if (sw1 === true || sw2 === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        } else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    }

    // Lógica do operador NOT
    if (identify === "/simulador/not.html" && broken !== true) {
        if (!sw1) {
            document.getElementById('lamp').src = "img/on.jpg"
        } else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    }
}






// Atualizar automaticamente o ano no rodapé.
let ano = document.getElementById('copyrightYear')
let anoAtual = new Date().getFullYear()
ano.textContent = anoAtual
