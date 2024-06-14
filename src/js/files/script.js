// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.querySelectorAll('.tabs-slide__info-button').forEach(button => {
  button.addEventListener('click', function() {
      // Добавление класса active к родительскому элементу с классом tabs-slide
      this.closest('.tabs-slide').classList.toggle('active');
      
      // Переключение класса disable у элементов с классами open и close
      document.querySelector('.open').classList.toggle('disable');
      document.querySelector('.close').classList.toggle('disable');
  });
});