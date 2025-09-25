import { HojaRuta } from "./HojaRuta";

export class Detalle {
  private kmSalida: number;
  private kmRegreso: number;
  private horaSalida: number;
  private horaRegreso: number;
  private minSalida: number;
  private minRegreso: number;
  private HojaRuta?: HojaRuta;

  constructor(
    kmSalida: number, kmRegreso: number, horaSalida: number, horaRegreso: number, minSalida: number,minRegreso: number) {
    this.kmSalida = kmSalida;
    this.kmRegreso = kmRegreso;
    this.horaSalida = horaSalida;
    this.horaRegreso = horaRegreso;
    this.minSalida = minSalida;
    this.minRegreso = minRegreso;
  }

  //ACA AGREGO LA HOJA DE RUTA AL DETALLE Y EL DETALLE A LA HOJA DE RUTA
  setHojaRuta(hojaRuta: HojaRuta): void {
    this.HojaRuta = hojaRuta;
    
  }

  /**
   * Getter $kmSalida
   * @return {number}
   */
  public get $kmSalida(): number {
    return this.kmSalida;
  }

  /**
   * Setter $kmSalida
   * @param {number} value
   */
  public set $kmSalida(value: number) {
    this.kmSalida = value;
  }

  /**
   * Getter $kmRegreso
   * @return {number}
   */
  public get $kmRegreso(): number {
    return this.kmRegreso;
  }

  /**
   * Setter $kmRegreso
   * @param {number} value
   */
  public set $kmRegreso(value: number) {
    this.kmRegreso = value;
  }

  /**
   * Getter $horaSalida
   * @return {number}
   */
  public get $horaSalida(): number {
    return this.horaSalida;
  }

  /**
   * Setter $horaSalida
   * @param {number} value
   */
  public set $horaSalida(value: number) {
    this.horaSalida = value;
  }

  /**
   * Getter $horaRegreso
   * @return {number}
   */
  public get $horaRegreso(): number {
    return this.horaRegreso;
  }

  /**
   * Setter $horaRegreso
   * @param {number} value
   */
  public set $horaRegreso(value: number) {
    this.horaRegreso = value;
  }

  /**
   * Getter $minSalida
   * @return {number}
   */
  public get $minSalida(): number {
    return this.minSalida;
  }

  /**
   * Setter $minSalida
   * @param {number} value
   */
  public set $minSalida(value: number) {
    this.minSalida = value;
  }

  /**
   * Getter $minRegreso
   * @return {number}
   */
  public get $minRegreso(): number {
    return this.minRegreso;
  }

  /**
   * Setter $minRegreso
   * @param {number} value
   */
  public set $minRegreso(value: number) {
    this.minRegreso = value;
  }
}
