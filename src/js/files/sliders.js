/*
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper с node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from "swiper"
import {} from "swiper/modules"
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss"
// Полный набор стилей с scss/libs/swiper.scss
//import "../../scss/libs/swiper.scss"
// Полный набор стилей с node_modules
//import "swiper/css"

// Инициализация слайдеров
function initSliders() {
	// Список слайдеров
	// Проверяем, есть ли слайдер на странице
	if (document.querySelector(".tabs__slider")) {
		// Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper(".tabs__slider", {
			// Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			// modules: [Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 20,
			// freeMode: {
			// 	enabled: true,
			// },
			speed: 800,
      // autoHeight: true,
			// loop: true,
			// touchRatio: 0,
			// simulateTouch: false,
			//preloadImages: false,
			//lazy: true,

			// Эффекты
			//effect: 'fade',
			// autoplay: {
			// 	delay: 1000,
			// 	disableOnInteraction: false,
			// },

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: ".swiper-button-prev",
			// 	nextEl: ".swiper-button-next",
			// },
			// Брейкпоинты
			breakpoints: {
				479.98: {
          spaceBetween: 30,
				},
				// 700: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 30,
				// },
				// 980: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 30,
				// },
				// 1328: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},
			// События
			on: {
      },
		})
	}
}
// Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll(".swiper_scroll")
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index]
			const sliderScrollBar =
				sliderScrollItem.querySelector(".swiper-scrollbar")
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: "vertical",
				slidesPerView: "auto",
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			})
			sliderScroll.scrollbar.updateSize()
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders()
	// Запуск инициализации скролл на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
})
