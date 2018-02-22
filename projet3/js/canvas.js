class Canvas {
  constructor(id, radius, dragging, context) {
    this.id = id;
    this.radius = radius;
    this.dragging = dragging;
    this.context = context;
  }
  engage(e) {
    this.dragging = true;
    myCanvas.putPoint(e);
  }
  putPoint(e) {
    if (this.dragging) {
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
      context.beginPath();
      context.arc(e.clientX, e.clientY, myCanvas.radius, 0, Math.PI * 2);
      context.fill();
      context.beginPath();
      context.moveTo(e.clientX, e.clientY);
    }
  }
  disengage() {
    this.dragging = false;
    context.beginPath();
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
}
var myCanvas = new Canvas(document.getElementById("canvas"), 4, false, document.getElementById("canvas").getContext("2d"));

context = myCanvas.context;

context.lineWidth = myCanvas.radius * 2;

myCanvas.mousedown();
myCanvas.mousemove();
myCanvas.mouseup();

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


