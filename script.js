const prevSlide = document.querySelector('.slider_item_switches__left-arrow')
const nextSlide = document.querySelector('.slider_item_switches__right-arrow')
const slides = document.querySelector('.slider_item').querySelector('.wrapper').children

const bg = document.querySelector('.slider_item_circle')
const bgDog = document.querySelector('.slider_item_circle-dog')
const nextContent = () => {

    bg.style.opacity = "0"
    bgDog.style.opacity = "1"
    slides[1].style.right = "1440px"
    slides[2].style.right = "608px"
    console.log('next');
    prevSlide.removeAttribute('disabled')
    nextSlide.setAttribute('disabled', 'disabled')
    nextSlide.classList.toggle('disabled_switch')
    prevSlide.classList.toggle('disabled_switch')
    nextSlide.classList.toggle('active_switch')
    prevSlide.classList.toggle('active_switch')
}

const prevContent = () => {

    console.log('prev');
    bgDog.style.opacity = "0"
    bg.style.opacity = "1"
    slides[1].style.right = "82px"
    slides[2].style.right = "-720px"
    nextSlide.removeAttribute('disabled')
    prevSlide.setAttribute('disabled', 'disabled')
    nextSlide.classList.toggle('disabled_switch')
    prevSlide.classList.toggle('disabled_switch')
    nextSlide.classList.toggle('active_switch')
    prevSlide.classList.toggle('active_switch')

}

nextSlide.addEventListener('click', nextContent)
prevSlide.addEventListener('click', prevContent)



// карточка с формой (openForm)
const doctorCard = document.querySelector('.content__card-doctor')
const doctorForm = document.querySelector('.content__card-form')

const openForm = () => {
    doctorCard.style.right = "100%"
}
const closeForm = () => {
    doctorCard.style.right = "0"

}

doctorCard.addEventListener('mouseover', openForm)
doctorForm.addEventListener('mouseout', closeForm)