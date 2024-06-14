// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.querySelectorAll('.tabs-slide__info-button').forEach(button => {
  button.addEventListener('click', function() {
      const id = this.getAttribute('data-id');
      
      // Добавление класса active к родительскому элементу с классом tabs-slide
      document.querySelector(`.tabs-slide[data-id="${id}"]`).classList.toggle('active');
      
      // Переключение класса disable у элементов с соответствующими data-id
      document.querySelector(`.open[data-id="${id}"]`).classList.toggle('disable');
      document.querySelector(`.close[data-id="${id}"]`).classList.toggle('disable');
  });
});