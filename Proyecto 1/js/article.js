let articles = document.querySelector(".layout__articles");

let post = [
  {
    title: "articulo 1",
    date: "02/26",
    body: "lorem hdhieds lfjaopdjw lkdbnsaujidi33w mfoabhudw jhdubsaid",
  },
  {
    title: "articulo 2",
    date: "23/26",
    body: "lorem hdhieds lfjaopdjw lkdbndasdsaujidiw mfoabhudw jhdubsaid",
  },
  {
    title: "articulo 3",
    date: "3/26",
    body: "lorem hdhieds lfjaopdjw lkdbnsaujidiw mfoabhudw jhdubsaid",
  },
  {
    title: "articulo 4",
    date: "12/26",
    body: "lorem hdhieds lfjaopdjw lkdbnsau33jidiw mfoabhudw jhdubsaid",
  },
];

post.forEach((valor) => {
  articles.innerHTML += `<article class="articles__article">
          <h3 class="article__title">${valor.title}</h3>
          <span class="article__date">${valor.date}</span>
          <p class="article__body">
            ${valor.body}
          </p>
          <a href="" class="article__btn">Leer Mas</button>
        </article>`;
});
