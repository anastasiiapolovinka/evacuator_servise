// scripts.js

const initTabs = () => {
  const tabs = document.querySelectorAll(".price_btn");
  const contentBlocks = document.querySelectorAll(".price_info");
  const handleTabChange = (event) => {
    const isActive = event.target.classList.contains("active");
    if (!isActive) {
      tabs.forEach((tab) => tab.classList.toggle("active"));
      contentBlocks.forEach((block) => block.classList.toggle("active"));
    }
  };
  tabs.forEach((tab) => {
    tab.addEventListener("click", handleTabChange);
  });
};

initTabs();

const initSlider = () => {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  // Получаем элементы слайдера
  const slider = document.querySelector(
    isMobile ? ".slider-items_mob" : ".slider_items"
  );
  if (!slider) return;
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const slides = Array.from(slider.querySelectorAll(".slider"));
  const slideCount = slides.length;
  let slideIndex = 0;

  // Устанавливаем обработчики событий для кнопок
  prevButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

  // Функция для показа предыдущего слайда
  function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }

  // Функция для показа следующего слайда
  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
  }

  // Функция для обновления отображения слайдера
  function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = "flex";
      } else {
        slide.style.display = "none";
      }
    });
  }

  updateSlider();
};

initSlider();

// Modal
const initModal = () => {
  const modal = document.querySelector(".overlay");
  const form = document.getElementById("form_annunciation");
  const close_Btn = document.getElementById("close_modal");

  const submitHandler = (e) => {
    e.preventDefault();
    modal.classList.add("open");
  };
  form.addEventListener("submit", submitHandler);

  const closeHandler = () => {
    modal.classList.remove("open");
  };
  close_Btn.addEventListener("click", closeHandler);
};

initModal();
