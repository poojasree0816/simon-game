var fixedPattern=["blue","green","red","yellow"];
var compPattern=[];
var userPattern=[];
var level=0
started="false"
document.addEventListener("keypress",function start(){
  if(started==="false"){
    $("h1").text("level"+level)
    started="true"
    nextSequence()
  }
})


function playSound(color){
  var audio= new Audio("sounds/"+color+".mp3");
  audio.play();
}
function animate(color){
  $("#"+color).addClass("pressed")
  setTimeout(function(){$("#"+color).removeClass("pressed");} , 100);
}
function nextSequence(){
  level+=1;
  $("h1").text("level"+level)

  userPattern=[]

  var rannum=Math.floor(Math.random()*4)
  var rancolor=fixedPattern[rannum];
  console.log(rancolor)
  compPattern.push(rancolor)
  $("#"+rancolor).fadeIn(100).fadeOut(100).fadeIn(100)
  playSound(rancolor);



}
$(".btn").on("click",function(){
  var usercolor=$(this).attr("id");
  userPattern.push(usercolor)
  playSound(usercolor)
  animate(usercolor)
  check(userPattern.length-1)
})
function check(color){

  if(userPattern[color]===compPattern[color]){
    if(userPattern.length===compPattern.length){
      setTimeout(function(){
        nextSequence()
    },2000)
    }


  }
  else{
    $("h1").text("you lost")
    playSound("wrong");
  }

}
