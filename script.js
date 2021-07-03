// Слайдер (desktop & tablet)
const prevSlide = document.querySelector('.slider_items_switches__left-arrow')
const nextSlide = document.querySelector('.slider_items_switches__right-arrow')
const slides = document.querySelector('.slider_items').children
const slider = document.querySelector('.slider_items')

const prevSlideMobile = document.querySelector('.slider_switches-mobile_left')
const nextSlideMobile = document.querySelector('.slider_switches-mobile_right')

const bg = document.querySelector('.slider_items_circle')
const bgDog = document.querySelector('.slider_items_circle-dog')

const nextContent = () => {
    const windowWidth = window.innerWidth
    console.log(slides);
    bg.style.opacity = "0"
    bgDog.style.opacity = "1"

    if (windowWidth >= 1216) {
        slides[3].style.right = "100%"
        slides[4].style.right = "0"
    } else if (windowWidth >= 768) {
        slides[3].style.right = "100%"
        slides[4].style.right = "0"
    } else {

        nextSlideMobile.setAttribute('disabled', 'disabled')
        prevSlideMobile.removeAttribute('disabled')
        nextSlideMobile.classList.toggle('disabled_switch-mobile')
        prevSlideMobile.classList.toggle('disabled_switch-mobile')
        nextSlideMobile.classList.toggle('active_switch-mobile')
        prevSlideMobile.classList.toggle('active_switch-mobile')

        slides[3].style.right = "100%"
        slides[4].style.right = "0"
    }

    prevSlide.removeAttribute('disabled')
    nextSlide.setAttribute('disabled', 'disabled')

    nextSlide.classList.toggle('disabled_switch')
    prevSlide.classList.toggle('disabled_switch')
    nextSlide.classList.toggle('active_switch')
    prevSlide.classList.toggle('active_switch')
}

const prevContent = () => {
    const windowWidth = window.innerWidth
    console.log('asjhgx');
    bgDog.style.opacity = "0"
    bg.style.opacity = "1"

    if (windowWidth >= 1216) {
        slides[3].style.right = "0"
        slides[4].style.right = "-120%"
    } else if (windowWidth >= 768) {
        slides[3].style.right = "0"
        slides[4].style.right = "-120%"
    } else {
        prevSlideMobile.setAttribute('disabled', 'disabled')
        nextSlideMobile.removeAttribute('disabled')
        nextSlideMobile.classList.toggle('disabled_switch-mobile')
        prevSlideMobile.classList.toggle('disabled_switch-mobile')
        nextSlideMobile.classList.toggle('active_switch-mobile')
        prevSlideMobile.classList.toggle('active_switch-mobile')
        console.log('sdfds');
        slides[3].style.right = "0"
        slides[4].style.right = "-100%"
    }

    nextSlide.removeAttribute('disabled')
    prevSlide.setAttribute('disabled', 'disabled')

    nextSlide.classList.toggle('disabled_switch')
    prevSlide.classList.toggle('disabled_switch')
    nextSlide.classList.toggle('active_switch')
    prevSlide.classList.toggle('active_switch')

}

nextSlide.addEventListener('click', nextContent)
prevSlide.addEventListener('click', prevContent)

// Слайдер (mobile)
prevSlideMobile.addEventListener('click', prevContent)
nextSlideMobile.addEventListener('click', nextContent)
slider.addEventListener('mousedown', (e) => {
    const windowWidth = window.innerWidth
    const position = e.x - 164

    if (windowWidth < 768) {

        if (position > 140) {
            slides[3].style.right = "100%"
            slides[4].style.right = "0"

            nextSlideMobile.setAttribute('disabled', 'disabled')
            prevSlideMobile.removeAttribute('disabled')
            nextSlideMobile.classList.toggle('disabled_switch-mobile')
            prevSlideMobile.classList.toggle('disabled_switch-mobile')
            nextSlideMobile.classList.toggle('active_switch-mobile')
            prevSlideMobile.classList.toggle('active_switch-mobile')
        } else {
            if (e.target.innerHTML != "Подобрать план") {
                slides[3].style.right = "0"
                slides[4].style.right = "-100%"
                prevSlideMobile.setAttribute('disabled', 'disabled')
                nextSlideMobile.removeAttribute('disabled')
                nextSlideMobile.classList.toggle('disabled_switch-mobile')
                prevSlideMobile.classList.toggle('disabled_switch-mobile')
                nextSlideMobile.classList.toggle('active_switch-mobile')
                prevSlideMobile.classList.toggle('active_switch-mobile')
            }
        }

    }


})

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
const buttonMore = document.querySelector('.slider_items_content-second-slide_information_button')
const closePopup = document.querySelector('.popup_form_cross-icon')
const buttonPopup = document.querySelector('.popup_form_button')

let isOpen = false
let sendIt = false

const showPopup = () => {

    if (!isOpen) {
        popup.style.display = "flex"
        isOpen = true
    } else if (isOpen) {
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

    if (sendIt) {
        popup.style.display = "none"
        isOpen = false
    }
})

// Бургер
const burger = document.querySelector('.header_content__burger')
const menu = document.querySelector('.burger-menu')
const crossBurger = document.querySelector('.burger-menu_cross-icon')
const linkBurger = document.querySelectorAll('.burger-menu_list_item')

let isOpenBurger = false

const openBurger = () => {
    if (!isOpenBurger) {
        menu.style.right = "0"
        isOpenBurger = true
    }
}

const closeBurger = () => {
    if (isOpenBurger) {
        menu.style.right = "100%"
        isOpenBurger = false
    }
}

burger.addEventListener('click', openBurger)
crossBurger.addEventListener('click', closeBurger)

for (let i = 0; i < linkBurger.length; i++) {
    linkBurger[i].addEventListener('click', closeBurger)
}