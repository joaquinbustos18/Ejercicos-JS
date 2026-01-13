function prepararPedido() {
  setTimeout(() => {
    console.log("hola ya termine");
  }, 2000);
}

async function ejecutarPedido() {
  try {
    const log = await prepararPedido();
    console.log(log);
  } catch (error) {
    console.log("Error en el pedido");
  }
}

ejecutarPedido();
