(function setYear() {
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

(function loadDadJoke() {
  var jokeEl = document.getElementById("dad-joke");
  if (!jokeEl) return;
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
      "User-Agent": "Gunnar Portfolio",
    },
  })
    .then(function (r) {
      return r.json();
    })
    .then(function (data) {
      if (data && data.joke) {
        jokeEl.textContent = data.joke;
      } else {
        jokeEl.textContent = "Couldn't load a joke right now.";
      }
    })
    .catch(function () {
      jokeEl.textContent = "Couldn't load a joke right now.";
    });
})();

(function slideshow() {
  var container = document.getElementById("slideshow");
  if (!container) return;
  var slides = Array.prototype.slice.call(container.querySelectorAll(".slide"));
  if (slides.length === 0) return;
  var index = 0;
  function show(i) {
    slides.forEach(function (img, idx) {
      if (idx === i) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });
  }
  show(index);
  setInterval(function () {
    index = (index + 1) % slides.length;
    show(index);
  }, 3000);
})();
