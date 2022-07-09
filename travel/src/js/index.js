console.log(
  `Вёрстка валидная +10\n
Вёрстка семантическая +20\n
    В коде странице присутствуют следующие элементы:\n
    <header>, <main>, <footer> +3\n
    четыре элемента <section> (по количеству секций) +3\n
    только один заголовок <h1> +3\n
    четыре заголовка <h2> +3\n
    один элемент <nav> +3\n
    два списка ul > li > a (панель навигации, ссылки на соцсети) +3\n
    четыре кнопки <button> +2\n
Вёрстка соответствует макету +48\n
    блок <header> +6\n
    секция preview +9\n
    секция steps +9\n
    секция destinations +9\n
    секция stories +9\n
    блок <footer> +6\n
Требования к css + 12\n
    для построения сетки используются флексы или гриды +2\n
    при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n
    фоновый цвет тянется на всю ширину страницы +2\n
    иконки добавлены в формате .svg +2\n
    изображения добавлены в формате .jpg +2\n
    есть favicon +2\n
Интерактивность +20\n
    плавная прокрутка по якорям +5\n
    иконки соцсетей в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса +5\n
    в макете стили не указаны, реализованы по своему усмотрению, руководствуясь общим стилем макета +5\n
    плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5`
);

const body = document.querySelector("body");
const headerBurger = document.querySelector(".header__nav-button");
const headerNav = document.querySelector(".header__nav");
const headerNavItem = document.querySelectorAll(".header__nav-item");
const closeBtn = document.querySelector(".nav-list__close-button");
const fadeLayer = document.querySelector(".overlay");

const openMenu = () => {
  headerNav.classList.toggle("nav_active");
  fadeLayer.classList.toggle("overlay_active");
  body.classList.toggle("no_scroll");
};

headerBurger.addEventListener("click", openMenu);
headerNavItem.forEach((el) => {
  el.addEventListener("click", openMenu);
});
fadeLayer.addEventListener("click", openMenu);
closeBtn.addEventListener("click", openMenu);
