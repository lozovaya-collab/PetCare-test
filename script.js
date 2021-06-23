const prevSlide = document.querySelector('.slider_item_switches__left-arrow')
const nextSlide = document.querySelector('.slider_item_switches__right-arrow')
const content = document.querySelector('.slider_item_content')
const bg = document.querySelector('.slider_item_circle')
const bgDog = document.querySelector('.slider_item_circle-dog')
const nextContent = () => {

    bg.style.opacity = "0"
    bgDog.style.opacity = "1"


    prevSlide.removeAttribute('disabled')
}

const prevContent = () => {

    // content.classList = "slider_item_content"
    bgDog.style.opacity = "0"
    bg.style.opacity = "1"

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