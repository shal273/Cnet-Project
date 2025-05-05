// script.js

// page5

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-button");
  const LoadMore = document.getElementById("load-text");
  const hiddenServices = document.querySelectorAll(".page5__container.hidden");

  toggleButton.addEventListener("click", function () {
    hiddenServices.forEach((page5__container) => {
      page5__container.classList.toggle("hidden");
    });

    // Change button text based on visibility of services
    if (hiddenServices[0].classList.contains("hidden")) {
      LoadMore.textContent = "Load More";
    } else {
      LoadMore.textContent = "Collapse";
    }
  });
});

// page5
