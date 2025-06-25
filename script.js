// const LiveDemo_button = document.getElementsByClassName("btn-demo");

// LiveDemo_button.addEventListener("click", () => {
//   window.open("https://huddle-welcome-page.netlify.app", "_blank");
// });

// const Github_button = document.getElementsByClassName("btn-github");

// Github_button.addEventListener("click", () => {
//   window.open("https://github.com/KabeloMaps/Huddle-Landing-Page-", "_blank");
// });

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
