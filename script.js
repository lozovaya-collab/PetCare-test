// Слайдер
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
    prevSlide.removeAttribute('disabled')
    nextSlide.setAttribute('disabled', 'disabled')
    nextSlide.classList.toggle('disabled_switch')
    prevSlide.classList.toggle('disabled_switch')
    nextSlide.classList.toggle('active_switch')
    prevSlide.classList.toggle('active_switch')
}

const prevContent = () => {
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



// Карточка с формой (openForm)
const doctorCard = document.querySelector('.content__card-doctor')
const doctorForm = document.querySelector('.content__card-info')

const openForm = () => {
    doctorCard.style.right = "100%"
}
const closeForm = () => {
    doctorCard.style.right = "0"

}

doctorCard.addEventListener('mouseover', openForm)
doctorForm.addEventListener('mouseleave', closeForm)

// Попап

const popup = document.querySelector('.popup')
const buttonMore = document.querySelector('.second_slide_information_button')
const closePopup = document.querySelector('.popup_form_cross-icon')
const buttonPopup = document.querySelector('.popup_form_button')

let isOpen = false
let sendIt

const showPopup = (sendIt) => {
    if (!isOpen) {
        popup.style.display = "flex"
        isOpen = true
    } else if (isOpen && sendIt == undefined) {
        popup.style.display = "none"
        isOpen = false
    } else if (isOpen && sendIt == true) {
        popup.style.display = "none"
        isOpen = false
    }
}

buttonMore.addEventListener('click', showPopup)
closePopup.addEventListener('click', showPopup)
buttonPopup.addEventListener('click', () => {
    sendIt = true
    const values = document.querySelectorAll('.popup_form_details_inputs_item')
    for (let i = 0; i < values.length; i++) {
        if (values[i].hasAttribute("required") && values[i].value === "") {
            sendIt = false
            values[i].style.borderBottom = "1px solid red"
        } else {
            values[i].style.borderBottom = "1px solid #394573"
        }
    }

    showPopup(sendIt)
})