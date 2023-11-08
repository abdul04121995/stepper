document.querySelectorAll("button").forEach((b) => {
  b.addEventListener("click", function (e) {
    if (e.target.dataset.btn === "next") {
      this.parentElement.parentElement.classList.remove("displaying");
      this.parentElement.parentElement.nextElementSibling.classList.add(
        "displaying"
      );
    } else if (e.target.dataset.btn === "prev") {
      this.parentElement.parentElement.classList.remove("displaying");
      this.parentElement.parentElement.previousElementSibling.classList.add(
        "displaying"
      );
    }
  });
});
