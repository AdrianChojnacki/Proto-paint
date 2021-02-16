window.addEventListener(`load`, () => {
  const canvas = document.querySelector(`#canvas`);
  const ctx = canvas.getContext("2d");

  // Set canvas size
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

  //   ctx.beginPath();
  //   ctx.moveTo(100, 100);
  //   ctx.lineTo(200, 100);
  //   ctx.lineTo(200, 150);
  //   ctx.closePath();
  //   ctx.stroke();

  // Interface
  const lineWidth = 10;
  const lineCap = "round";
  const strokeStyle = "black";

  // Flag
  let painting = false;

  // Flag switch functions
  const startPosition = (e) => {
    painting = true;
    draw(e);
  };
  const finishedPosition = () => {
    painting = false;
    ctx.beginPath();
  };

  // Draw function
  const draw = (e) => {
    if (!painting) return;

    // Line styles
    ctx.lineWidth = lineWidth;
    ctx.lineCap = lineCap;
    ctx.strokeStyle = strokeStyle;

    // Draw mechanism
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  };

  // Listeners
  canvas.addEventListener(`mousedown`, startPosition);
  canvas.addEventListener(`mouseup`, finishedPosition);
  canvas.addEventListener(`mousemove`, draw);
});

// Keep canvas size on window resizing
window.addEventListener(`resize`, () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
