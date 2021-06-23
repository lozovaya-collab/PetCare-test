const prevSlide = document.querySelector('.slider_item_switches__left-arrow')
const nextSlide = document.querySelector('.slider_item_switches__right-arrow')
const content = document.querySelector('.slider_item_content')
const bg = document.querySelector('.slider_item_circle')
const bgDog = document.querySelector('.slider_item_circle-dog')
const nextContent = () => {
    content.classList = "second_slide slider_item_content"
    bg.style.opacity = "0"
    bgDog.style.opacity = "1"
    content.innerHTML = ` 
    <div class="second_slide_information">
        <h2 class="second_slide_information_title">
            Закажите план заботы
        </h2>
        <p class="second_slide_information_description">
            Регулярная доставка специально подобранного корма и других товаров для кошек и собак
        </p>
        <span class="second_slide_information_price"> от <span>1299</span> ₽/мес </span>
        <button class="second_slide_information_button">Подобрать план</button>
    </div>
    `
    prevSlide.removeAttribute('disabled')
}

const prevContent = () => {
    console.log('555');

    content.classList = "slider_item_content"
    bgDog.style.opacity = "0"
    bg.style.opacity = "1"
    content.innerHTML = `
    <div class="slider_item_content__information">
        <h2 class="slider_item_content__information_title">
            Мы заботимся <br> о ваших питомцах
        </h2>
        <p class="slider_item_content__information_description">
            Записывайтесь в ветклиники <br> и консультируйтесь с ветеринарным врачом онлайн
        </p>
        <button class="slider_item_content__information_button">Связаться с нами</button>
        </div>
        <div class="slider_item_content__image">
            <img class="slider_item_content__image-cat" src="/assets/images/cat.png" alt="cat">
        </div>
    `
}

nextSlide.addEventListener('click', nextContent)
prevSlide.addEventListener('click', prevContent)