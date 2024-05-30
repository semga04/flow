const btnLeft = document.querySelector('.slider__btn-prev_js')
const btnRight = document.querySelector('.slider__btn-next_js')
const slides = document.querySelector('.slider__slides_js')
let offset = 0
let offsetAuto = 0

btnRight.addEventListener('click', function(){
    offset -= 1360
    if(offset < -2720){      
        setTimeout(function(){
            slides.style.transition = 'none'
            offset = 0
            slides.style.left = offset + 'px'
        },1000)
    }
    slides.style.left = offset + 'px'
    slides.style.transition = 'all 1s ease 0s'
    console.log(offset)
})

btnLeft.addEventListener('click', function(){
    offset += 1360
    if(offset > 0){
        slides.style.transition = 'none'
        offset = -4080
        slides.style.left = offset + 'px'
        setTimeout(function(){
            slides.style.transition = 'all 1s ease 0s'
            offset += 1360
            slides.style.left = offset + 'px'
        }, 0)
    }
    slides.style.left = offset + 'px'
    console.log(offset)
})
