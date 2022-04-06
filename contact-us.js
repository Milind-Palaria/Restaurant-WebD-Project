/////////////////////////////////

const button = document.querySelector(".btn--login");
const popup = document.querySelector(".forms");
const overlay = document.querySelector(".overlayed");
const close = document.querySelector(".closes");

const openModal = function () {
  popup.classList.remove("hdn");
  overlay.classList.remove("hdn");
  close.classList.remove("hdn");
};

const closeModal = function () {
  popup.classList.add("hdn");
  overlay.classList.add("hdn");
  close.classList.add("hdn");
};

button.addEventListener("click", openModal);
// popup.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
close.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !popup.classList.contains("hdn")) {
    closeModal();
  }
});
//////////////////////////////////////////////////////
const switchers = [...document.querySelectorAll(".switcher")];

switchers.forEach((item) => {
  item.addEventListener("click", function () {
    switchers.forEach((item) =>
      item.parentElement.classList.remove("is-active")
    );
    this.parentElement.classList.add("is-active");
  });
});

///////////////////////////////////////////////////////////

const backToTopBtn = document.querySelector(".back-to-top--btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    // console.log("berks");
    backToTopBtn.setAttribute("data-visible", true);
  } else {
    // console.log("still berks");
    backToTopBtn.setAttribute("data-visible", false);
  }
});
// const backToTopBtn = document.querySelector(".back-to-top--btn");

backToTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);
