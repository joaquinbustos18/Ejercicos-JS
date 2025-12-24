async function pokemon() {
  try {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const datos = await respuesta.json();

    // 📌 Regla que te salva siempre
    // El objeto va a la izquierda, la clave entre corchetes.

    for (const key in datos) {
      console.log(`su nombre es: ${datos.name} y su ${datos.weight}`);

      //   if (typeof datos[key] == "string") {
      //     console.log(key + " " + datos[key]);
      //   }
    }
  } catch (error) {
    console.log("no recibi nada");
  }
}

pokemon();
