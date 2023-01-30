/**
 * Функция normalize100vh устанавливает 100vh для доступного к просмотру вюпорта
 * тем самым приводя для всех браузеров высоту к одному виду и адапптирует так
 * что в браузерах с полосами которые сверху и снизу сайт не заходит под них
 */
function normalize100vh() {
  const setHeight = () => {
    const vh = window.innerHeight * 0.01; // наxодим  1vh
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    // --vh использовать в css -> height: calc(var(--vh) * 100);
  };
  setHeight();
  window.addEventListener("resize", setHeight);
}
normalize100vh();

$(".food-list").slick({
  arrows: false,
  infinite: true,
  dots: true,
  slidesToShow: 3,
  draggable: false,
  responsive: [
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});


const burger = document.querySelector('.burger')


burger.addEventListener('click', () => {
  const nav = document.querySelector('.nav')

  burger.classList.toggle('burger--active')
  nav.classList.toggle('nav--active')
  document.querySelector('html').classList.toggle('html-hidden')
})