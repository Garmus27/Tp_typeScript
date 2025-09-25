import { Vehiculo } from "./Vehiculo";
import { HojaRuta } from "./HojaRuta";
import { Detalle } from "./Detalle";

// Crear instancia de Vehiculo
const vehiculo = new Vehiculo("ABC123", "Toyota", "Corolla");

// Crear 3 hojas de ruta
for (let i = 1; i <= 3; i++) {
  const hojaRuta = new HojaRuta(new Date(2025, 8, i), i); 

  // Crear 3 detalles por hoja de ruta
  for (let j = 1; j <= 3; j++) {
    const detalle = new Detalle(
      100 * j,
      150 * j,
      8 + j,
      17 + j,
      15,
      45
    );
    hojaRuta.addDetalle(detalle);
  }

  vehiculo.addHojaRuta(hojaRuta);
}

// Mostrar resultado en el HTML
const output = document.getElementById("output");
if (output) {
  output.innerHTML += `<p>Patente: ${vehiculo.$patente}, Marca: ${vehiculo.$marca}, Modelo: ${vehiculo.$modelo}</p>`;
  vehiculo.$hojaRuta.forEach((hojaRuta, index) => {
    output.innerHTML += `<p>HojaRuta #${index + 1} - Fecha: ${hojaRuta.$fecha.toDateString()}, Número: ${hojaRuta.$numero}</p>`;
    hojaRuta.$detalles.forEach((detalle, i) => {
      output.innerHTML += `<p>Detalle #${i + 1}: kmSalida=${detalle.$kmSalida}, kmRegreso=${detalle.$kmRegreso}, horaSalida=${detalle.$horaSalida}:${detalle.$minSalida}, horaRegreso=${detalle.$horaRegreso}:${detalle.$minRegreso}</p>`;
    });
  });
}
