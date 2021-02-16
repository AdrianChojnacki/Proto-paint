window.addEventListener(`load`, () => {
  const canvas = document.querySelector(`#canvas`);
  const ctx = canvas.getContext("2d");

  // Set size
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

// Resizing
window.addEventListener(`resize`, () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
