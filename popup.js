var quote =  document.querySelector(".quote");
var author = document.querySelector(".author")
fetch(`https://favqs.com/api/qotd`).then(response => response.json()).then(data => {
    quote.textContent = data["quote"]["body"];
    author.textContent = data["quote"]["author"];
});
