let VIDEO = null;
let CANVAS = null;
let CONTEXT = null;

function main() {
  CANVAS = document.getElementById("myCanvas");
  CONTEXT = CANVAS.getContext("2d");
  CANVAS.width = window.innerWidth;
  CANVAS.height = window.innerHeight;
  
  let promise = navigator.mediaDevices.getUserMedia({video: true});
  promise.then(function(stream) {
    alert('VİDEO')
    VIDEO = document.createElement('video');
    VIDEO.srcObject = stream;
    VIDEO.play();

    VIDEO.onloadeddata = () => {
      updateCanvas();
    }
  }).catch((err)=> {
    alert("Camera error", err);
  })
}