const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = '“All our dreams can come true, if we have the courage to pursue them.”\n – Walt Disney'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)


    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)
