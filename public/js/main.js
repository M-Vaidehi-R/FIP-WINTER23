
(() => {
  const progressCircle = document.querySelector(".autoplay-progress svg"),
        progressContent = document.querySelector(".autoplay-progress span");

    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });

  // Handle scrolling when tapping on the navbar menu
  const navbarMenu = document.querySelector('#navbar__menu');

  navbarMenu.addEventListener("click", (event) => {
  let target = event.target,
  link = target.dataset.link;
  if(link == null) {
  return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
  });

  // Navbar toggle button for small screen
  const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
  navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
  });
})()
