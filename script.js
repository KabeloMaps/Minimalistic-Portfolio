document.querySelectorAll(".btn-demo").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.open(btn.dataset.link, "_blank");
  });
});

document.querySelectorAll(".btn-github").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.open(btn.dataset.link, "_blank");
  });
});

window.history.replaceState({}, document.title, window.location.pathname);
