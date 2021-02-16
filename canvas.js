window.addEventListener(`load`, () => {
  const canvas = document.querySelector(`#canvas`);
  const ctx = canvas.getContext("2d");

  // Set size
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  //   ctx.strokeStyle = "red";
  //   ctx.lineWidth = 5;
  //   ctx.strokeRect(100, 100, 200, 200);
  //   ctx.strokeStyle = "blue";
  //   ctx.lineWidth = 10;
  //   ctx.strokeRect(200, 200, 200, 200);
  //   ctx.fillStyle = "purple";
  //   ctx.fillRect(300, 300, 200, 200);

  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(200, 100);
  ctx.lineTo(200, 150);
  ctx.closePath();
  ctx.stroke();
});

// Resizing
window.addEventListener(`resize`, () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
