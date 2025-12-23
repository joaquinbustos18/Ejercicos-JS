let titulo = document.querySelector("#h1");

async function datos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const obj = await res.json();

    titulo.textContent = obj.title;

    console.log();
  } catch (error) {
    console.log("ERROR");
  }
}

datos();
