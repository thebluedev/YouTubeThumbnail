document.getElementById("btn").addEventListener("click", setValue);
function setValue() {
  var link = document.getElementById("linkOfVid").value;
  var key = link.slice(32);
  document.querySelector(
    "img"
  ).src = `https://i.ytimg.com/vi/${key}/maxresdefault.jpg`;
  document.querySelector(
    "a"
  ).href = `https://i.ytimg.com/vi/${key}/maxresdefault.jpg`;
}

