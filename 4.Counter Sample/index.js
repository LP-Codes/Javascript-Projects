let count = 0;
document.getElementById("counter").style.color="hsl(60, 100%, 90%)"

document.getElementById("low").addEventListener("click", lower);
document.getElementById("add").addEventListener("click", adder);

function lower() {
  // alert('s')
  var ll = document.getElementById("counter").innerHTML= count--;
  


  if (ll<0) {
    document.getElementById("counter").style.color="hsl(0, 100%, 50%)"
  }
  else if (ll>=0){
    document.getElementById("counter").style.color="hsl(120, 100%, 50%)"
}
}

function adder() {
    var ll2 = document.getElementById("counter").innerHTML= count++;
  // alert('s')

  if (ll2<0) {
    document.getElementById("counter").style.color="hsl(0, 100%, 50%)"
  }
  else if (ll2>=0){
    document.getElementById("counter").style.color="hsl(120, 100%, 50%)"
}
 
}

