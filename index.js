const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slideCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

let activeSlideIndex = 0

sidebar.style.top = `-${(slideCount -1) * 100}vh`

upButton.addEventListener('click', ()=>{
    changeSlide('up')
})
downButton.addEventListener('click', ()=>{
    changeSlide('down')
})
function changeSlide(direction) {
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex === slideCount){
            activeSlideIndex = 0
        }
    } else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slideCount - 1
        }
    }
    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}