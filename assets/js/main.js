const stars = document.querySelectorAll(".rating");
const submitRanting = document.getElementById("submit-rating");
const selectedStar = document.getElementById("selectedStar");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    ratingValue = star.getAttribute("data-value");
    
    stars.forEach((s) => s.classList.remove("selected"));
    star.classList.add("selected");
    submitRanting.removeAttribute("disabled");
  });
});