

//var press = event.which || event.keyCode;
//  document.getElementById(KeyA).style.color = "grey";
document.addEventListener('keydown', function(event) {
        console.log(event.code);
          document.getElementById(event.code).style.backgroundColor="Grey";

  setTimeout(function () {
  document.getElementById(event.code).style.backgroundColor = "black";
}, 100);
})
