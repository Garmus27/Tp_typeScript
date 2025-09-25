import { HojaRuta } from "./HojaRuta";

export class Vehiculo {
  private marca: string;
  private modelo: string;
  private patente: string;
  private hojasRuta: HojaRuta[] = [];

  constructor(marca: string, modelo: string, patente: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.patente = patente;
  }

  //ACA AGREGO LA HOJA DE RUTA AL VEHICULO Y EL VEHICULO A LA HOJA DE RUTA
  addHojaRuta(hojaRuta: HojaRuta): void {
    if (!this.hojasRuta) {
      this.hojasRuta = [];
    }
    this.hojasRuta.push(hojaRuta);
    
  }


  calcularTotalKilometrosRecorridos (fechaDesde: Date, fechaHasta: Date) : number {
    let totalKm = 0;
    if(this.hojasRuta){
        this.hojasRuta.forEach(hojaRuta => {
            if(hojaRuta.$fecha >= fechaDesde && hojaRuta.$fecha <= fechaHasta){
                totalKm += hojaRuta.calcularTotalKilometros();
            }
        });
    }
    return totalKm;
}
public get $hojaRuta(): HojaRuta[] {       
     return this.hojasRuta;
}
    

  /**
   * Getter $marca
   * @return {string}
   */
  public get $marca(): string {
    return this.marca;
  }

  /**
   * Setter $marca
   * @param {string} value
   */
  public set $marca(value: string) {
    this.marca = value;
  }

  /**
   * Getter $modelo
   * @return {string}
   */
  public get $modelo(): string {
    return this.modelo;
  }

  /**
   * Setter $modelo
   * @param {string} value
   */
  public set $modelo(value: string) {
    this.modelo = value;
  }

  /**
   * Getter $patente
   * @return {string}
   */
  public get $patente(): string {
    return this.patente;
  }

  /**
   * Setter $patente
   * @param {string} value
   */
  public set $patente(value: string) {
    this.patente = value;
  }
}
