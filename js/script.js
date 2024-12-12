const container = document.querySelector(".page-container");
const signUpBtn = document.querySelector(".cta-container button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});
