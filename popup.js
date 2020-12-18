var quote =  document.querySelector(".quote");
var author = document.querySelector(".author")
var loader = document.querySelector(".loader");
fetch(`https://favqs.com/api/qotd`).then(response => response.json()).then(data => {
    loader.style.display = "none";
    quote.textContent = data["quote"]["body"];
    author.textContent = data["quote"]["author"];
});
