var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var radius = 10;

var dragging = false;

context.lineWidth = radius*2;

var putPoint = function (e) {
  if (dragging) {
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);

  }
}

var engage = function (e) {
  dragging = true;
  putPoint(e);
}

var disengage = function () {
  dragging = false;
  context.beginPath();
}

canvas.addEventListener("mousedown", engage);
canvas.addEventListener("mousemove", putPoint);
canvas.addEventListener("mouseup", disengage);

// var canvasDiv = document.getElementById('canvasDiv');
// canvas = document.createElement('canvas');
// canvas.setAttribute('width', "500px");
// canvas.setAttribute('height', "500px");
// canvas.setAttribute('id', 'canvas');
// canvasDiv.appendChild(canvas);
// if(typeof G_vmlCanvasManager != 'undefined') {
// 	canvas = G_vmlCanvasManager.initElement(canvas);
// }
// context = canvas.getContext("2d");

// $('#canvas').mousedown(function(e){
//     var mouseX = e.pageX - this.offsetLeft;
//     var mouseY = e.pageY - this.offsetTop;

//     paint = true;
//     addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
//     redraw();
//   });

//   $('#canvas').mousemove(function(e){
//     if(paint){
//       addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
//       redraw();
//     }
//   });

//   $('#canvas').mouseup(function(e){
//     paint = false;
//   });

//   $('#canvas').mouseleave(function(e){
//     paint = false;
//   });

//   var clickX = new Array();
// var clickY = new Array();
// var clickDrag = new Array();
// var paint;

// function addClick(x, y, dragging)
// {
//   clickX.push(x);
//   clickY.push(y);
//   clickDrag.push(dragging);
// }

// function redraw(){
//     context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

//     context.strokeStyle = "#df4b26";
//     context.lineJoin = "round";
//     context.lineWidth = 5;

//     for(var i=0; i < clickX.length; i++) {		
//       context.beginPath();
//       if(clickDrag[i] && i){
//         context.moveTo(clickX[i-1], clickY[i-1]);
//        }else{
//          context.moveTo(clickX[i]-1, clickY[i]);
//        }
//        context.lineTo(clickX[i], clickY[i]);
//        context.closePath();
//        context.stroke();
//     }
//   }






// $("aside").append("<canvas><p>Désolé, votre navigateur ne supporte pas Canvas. Mettez-vous à jour</p></canvas>");
// $("aside canvas").attr("id", "canvas");
// $("#canvas").css("width", "200px").css("height", "200px");
// var canvas = document.querySelector("#canvas");
// var context = canvas.getContext('2d');


// ///début tuto canvas
// if(typeof G_vmlCanvasManager != 'undefined') {
//     canvas = G_vmlCanvasManager.initElement(canvas);
// }

// $('#canvas').mousedown(function(e){
//     var mouseX = e.pageX - this.offsetLeft;
//     var mouseY = e.pageY - this.offsetTop;

//     paint = true;
//     addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
//     redraw();
//   });

//   $('#canvas').mousemove(function(e){
//     if(paint){
//       addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
//       redraw();
//     }
//   });

//   $('#canvas').mouseup(function(e){
//     paint = false;
//   });

//   $('#canvas').mouseleave(function(e){
//     paint = false;
//   });

//   var clickX = new Array();
// var clickY = new Array();
// var clickDrag = new Array();
// var paint;

// function addClick(x, y, dragging)
// {
//   clickX.push(x);
//   clickY.push(y);
//   clickDrag.push(dragging);
// }

// function redraw(){
//     context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

//     context.strokeStyle = "#df4b26";
//     context.lineJoin = "round";
//     context.lineWidth = 5;

//     for(var i=0; i < clickX.length; i++) {		
//       context.beginPath();
//       if(clickDrag[i] && i){
//         context.moveTo(clickX[i-1], clickY[i-1]);
//        }else{
//          context.moveTo(clickX[i]-1, clickY[i]);
//        }
//        context.lineTo(clickX[i], clickY[i]);
//        context.closePath();
//        context.stroke();
//     }
//   }