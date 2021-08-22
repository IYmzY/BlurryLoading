const loadText = document.querySelector('.loadingText')
const loadBackground = document.querySelector('.background')

let load = 0


const scaleOpacity = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const blurring = () => {
    load++
    if (load > 99) {
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scaleOpacity(load, 0, 100, 1, 0)
    loadBackground.style.filter = `blur(${scaleOpacity(load, 0, 100, 30, 0)}px)`

}
let int = setInterval(blurring, 30)

