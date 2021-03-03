document.getElementById("btn").addEventListener("click", hndclk);

function hndclk(e) {
    e.preventDefault();
  var inpt_val = document.getElementById("inpt").value;

  if (inpt_val === "") {
    alert("input is null");
  } else {
    var msg1 = document.createElement("h4");
    msg1.innerText = "Hello Message Delivered";
    msg1.className = "text-capitalize jumbotron ";
    var body = document.getElementById("mydiv");
    body.appendChild(msg1);
    document.getElementById("inpt").value=""
  }
}
