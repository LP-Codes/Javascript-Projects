url = "http://quotes.stormconsultancy.co.uk/random.json";

function hndlbtnclick() {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      var quotes = document.getElementById("p");
      var author = document.getElementById("h4");
      author.innerHTML = "Author - " + data.author;
      quotes.innerHTML = data.quote;
    });
}

document.getElementById("btn").addEventListener("click", hndlbtnclick);
