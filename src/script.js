function handleMenu() {
  const body = document.querySelector("body");
  if (body.classList.contains("open-menu")) {
    body.classList.add("close-menu");
    body.classList.remove("open-menu");
  } else {
    body.classList.add("open-menu");
    body.classList.remove("close-menu");
  }
}

function scrollSmooth() {
  const enlaces = document.querySelectorAll(".nav a");

  enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();
      const seccion = document.querySelector(e.target.attributes.href.value);
      const body = document.querySelector("body");

      if (body.classList.contains("open-menu")) {
        body.classList.add("close-menu");
        body.classList.remove("open-menu");
      }
      seccion.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

function initPage() {
  const buttonMenu = document.getElementById("buttonMenu");
  buttonMenu.addEventListener("click", handleMenu);

  scrollSmooth();

  const year = document.getElementById("year");
  year.textContent = new Date().getFullYear();
}

window.addEventListener("load", initPage);
