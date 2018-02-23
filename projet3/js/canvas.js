class Canvas {
  constructor(id, radius, dragging, context, canvasY, canvasX, filled) {
    this.id = id;
    this.radius = radius;
    this.dragging = dragging;
    this.context = context;
    this.canvasY = canvasY;
    this.canvasX = canvasX;
    this.filled = filled;
  }
  engage(e) {
    this.dragging = true;
    myCanvas.putPoint(e);
  }
  putPoint(e) {
    if (this.dragging) {
      this.canvasY = canvas.getBoundingClientRect().y;
      this.canvasX = canvas.getBoundingClientRect().x;
      context.fillStyle = "#e10203";
      context.strokeStyle = "#e10203";
      context.lineTo(e.clientX - this.canvasX, e.clientY - this.canvasY);
      context.stroke();
      context.beginPath();
      context.arc(e.clientX - this.canvasX, e.clientY - this.canvasY, myCanvas.radius, 0, Math.PI * 2);
      context.fill();
      context.beginPath();
      context.moveTo(e.clientX - this.canvasX, e.clientY - this.canvasY);
      console.log(context);
    }
  }
  disengage(e) {
    this.dragging = false;
    context.beginPath(e);
  }
  mousedown() {
    myCanvas.id.addEventListener("mousedown", myCanvas.engage);
  }
  mousemove() {
    myCanvas.id.addEventListener("mousemove", myCanvas.putPoint);
  }
  mouseup() {
    myCanvas.id.addEventListener("mouseup", myCanvas.disengage);
  }
  canvasFilled() {
    if (this.filled === true) {
      $("#canvas").css("border-color", "blue");
    }
  }
}

var myCanvas = new Canvas(document.getElementById("canvas"), 4, false, document.getElementById("canvas").getContext("2d"), canvas.getBoundingClientRect().y, canvas.getBoundingClientRect().x, false);

context = myCanvas.context;

context.lineWidth = myCanvas.radius * 2;
myCanvas.canvasFilled();
myCanvas.mousedown();
myCanvas.mousemove();
myCanvas.mouseup();
// button.addEventListener("click", function(){
//   context.clearRect(0, 0, canvas.width, canvas.height);
// })




// myCanvas.id.addEventListener("mousedown", myCanvas.engage);
// myCanvas.id.addEventListener("mousemove", myCanvas.putPoint);
// myCanvas.id.addEventListener("mouseup", myCanvas.disengage);
// var putPoint = function (e) {
//   if (this.dragging) {
//     context.lineTo(e.clientX, e.clientY);
//     context.stroke();
//     context.beginPath();
//     context.arc(e.clientX, e.clientY, myCanvas.radius, 0, Math.PI * 2);
//     context.fill();
//     context.beginPath();
//     context.moveTo(e.clientX, e.clientY);

//   }
// }



// var disengage = function() {
//   this.dragging = false;
//   context.beginPath();
// }