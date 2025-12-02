// Filtrar emails válidos (contienen "@")

let emails = ["juan@gmail.com", "hola.com", "test@hotmail.com"];

let valido = emails.filter((valor) => valor.includes("@"));
console.log(valido);
