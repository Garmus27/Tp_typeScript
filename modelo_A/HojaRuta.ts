import { Detalle } from "./Detalle";
import { Vehiculo } from "./Vehiculo";

export class HojaRuta {
  private fecha: Date;
  private numero: number;
  private detalles: Detalle[]= [];
  private vehiculo?: Vehiculo;

  constructor(fecha: Date, numero: number) {
    this.fecha = fecha;
    this.numero = numero;
  }

  //METODO PARA CALCULAR LOS KILOMETROS TOTALES DE LA HOJA DE RUTA
  //metodo forEach medio parecido al de java con streams, usando una funcion lamda agregamos al total los km 
  // la diferencia entre km regreso y km salida de cada detalle
  calcularTotalKilometros(){
    let totalKm = 0;
    if(this.detalles){
        this.detalles.forEach(detalle => {
            totalKm += detalle.$kmRegreso - detalle.$kmSalida}
        );
    }
    return totalKm;

  }

  //ACA AGREGO EL DETALLE A LA HOJA DE RUTA Y LA HOJA DE RUTA AL DETALLE
  addDetalle(detalle: Detalle): void {
    if (!this.detalles) {
      this.detalles = [];
    }
    this.detalles.push(detalle);
    detalle.setHojaRuta(this);
  }

  //ACA AGREGO EL VEHICULO A LA HOJA DE RUTA Y LA HOJA DE RUTA AL VEHICULO
  setVehiculo(vehiculo: Vehiculo): void {
    this.vehiculo = vehiculo;
    vehiculo.addHojaRuta(this);
  }

  /**
   * Getter $fecha
   * @return {Date}
   */
  public get $fecha(): Date {
    return this.fecha;
  }

  /**
   * Setter $fecha
   * @param {Date} value
   */

  public get $numero(): number {
  return this.numero;
}



public get $detalles(): Detalle[] {
  return this.detalles;
}

}
