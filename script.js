//ENTRADAS CON DOS SECTORES

let entradaCampo = "a";
let entradaVip = "b";

let metodoEfectivo = 1;
let metodoTarjeta = 2;

let continuarCompra = "si";

let ticket = {
  id: 0,
  tipo: "",
  precio: 0,
};

let resumen = {
  cantidadTotal: 0,
  precioTotal: 0,
  tickets: [],
};

function calcularPrecioEntrada(tipoEntrada, metodo) {
  let precioFinal = 0;
  let descuento = 0.7;
  let precioCampo = 8000;
  let precioVip = 12000;

  let tipoCampo = "a";
  let tipoVip = "b";

  let efectivo = 1;
  let tarjeta = 2;

  if (tipoEntrada == tipoCampo) {
    if (metodo == efectivo) {
      precioFinal = precioCampo * descuento;
    } else if (metodo == tarjeta) {
      precioFinal = precioCampo;
    }
  } else if (tipoEntrada == tipoVip) {
    if (metodo == efectivo) {
      precioFinal = precioVip * descuento;
    } else if (metodo == tarjeta) {
      precioFinal = precioVip;
    }
  }

  return precioFinal;
}

function calcularPrecioTotalEntradas(tickets) {
  //crear variable total inicializada 0
  var precioTotal = 0;

  //recorrer la lista de tickets y por cada iteración, acumular el precio de ese ticket en la variable total
  for (var i = 0; i < tickets.length; i++) {
    precioTotal += tickets[i].precio;
  }

  // devolver la variable total
  return precioTotal;
}

let idTicket = 0;

alert("Bienvenido a TuEntrada");

while (continuarCompra.toLocaleLowerCase() == "si") {
  idTicket++;

  ticket = {};

  ticket.id = idTicket;

  let tipoEntrada = prompt("Entradas disponibles: \n A: Campo \n B: VIP").toLowerCase();

  while (tipoEntrada.toLowerCase() != "a" && tipoEntrada.toLowerCase() != "b") {
    alert("Tipo de entrada inexistente. Por favor ingrese una entrada válida");

    tipoEntrada = prompt("Elegi un sector: \n A \n B").toLowerCase();
  }

  ticket.tipo = tipoEntrada;

  let metodoPago = prompt("Elegi el metodo de pago: \n 1 - Efectivo\n  2 - Tarjeta");

  while (metodoPago != 1 && metodoPago != 2) {
    alert("Metodo de pago inexistente. Ingrese un número válido");

    metodoPago = parseInt(prompt("Elegi el metodo de pago: \n 1 - Efectivo \n  2 - Tarjeta"));
  }

  let precioCalculado = calcularPrecioEntrada(tipoEntrada, metodoPago);

  ticket.precio = precioCalculado;

  //guardar el objeto ticket en la lista de tickets
  resumen.tickets.push(ticket);

  continuarCompra = prompt("Queres comprar otra entrada? \n - Si \n - No").toLowerCase();
}

//recorrer la lista de tickets y calcular el precio total de tickets para ponerlo en la propiedad precioTotal del objeto resumen
resumen.precioTotal = calcularPrecioTotalEntradas(resumen.tickets);

//contar el largo de la lista tickets para ponerlo en la propiedad 'cantidadTotal' del objeto resumen
resumen.cantidadTotal = resumen.tickets.length; 

//Mostrar el objeto resumen en un alert con todo el detalle del objeto (usar saltos de linea)
alert("Resumen de tu compra: \n Cantidad de entradas : " + resumen.cantidadTotal + "\n Precio Total: $" + resumen.precioTotal );

alert("Gracias por su compra! ");