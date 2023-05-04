
var no_of_drums=document.querySelectorAll("button").length;
  for(var i=0;i<no_of_drums;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
      this.style.color="red";
      var buttonof= this.innerHTML;
      makesound(buttonof);

  });
  }
  document.addEventListener("keypress",function(event){
    makesound(event.key)
  })
  function makesound(key){
    switch (key) {
      case "w":
      var tom1=new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

      case "a":
      var tom2=new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

      case "s":
      var tom3=new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

      case "d":
      var tom4=new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

      case "j":
      var snar=new Audio('sounds/snare.mp3');
      snar.play();
      break;

      case "k":
      var cras=new Audio('sounds/crash.mp3');
      cras.play();
      break;

      case "l":
      var kick=new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

      default: console.log(buttonof);

    }
  }
