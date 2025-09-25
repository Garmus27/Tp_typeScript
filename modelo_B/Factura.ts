import { DetalleFactura } from "./DetalleFactura.js";
import { Cliente } from "./Cliente.js";
import { TipoPago } from "./TipoPago.js";

export class Factura {
  private letra: string;
  private numero: number;
  private recargo: number;
  private tipoPago: TipoPago;
  private totalItems: number;
  private totalFinal: number;
  private fecha: Date;
  private cliente?: Cliente;
  private detalles?: DetalleFactura[];

  constructor(
    letra: string,
    numero: number,
    recargo: number,
    tipoPago: TipoPago,
    totalItems: number,
    totalFinal: number,
    fecha: Date
  ) {
    this.letra = letra;
    this.numero = numero;
    this.recargo = recargo;
    this.tipoPago = tipoPago;
    this.totalItems = totalItems;
    this.totalFinal = totalFinal;
    this.fecha = fecha;
  }

  public calcularTotalItems(): void {
    if (this.detalles) {
      this.detalles.forEach(
        (detalle) => {
        this.totalItems += detalle.$subTotal;
      }
      );
    }
  }

  public calcularTotalFinal(): void {
    this.totalFinal = this.totalItems + this.recargo;
  }



  public addDetalle(detalle: DetalleFactura): void {
    if (!this.detalles) {
      this.detalles = [];
    }
    this.detalles.push(detalle);
  }
  public get $detalles(): DetalleFactura[] | undefined {
    return this.detalles;
  }

  /**
   * Getter $cliente
   * @return {Cliente | undefined}
   */

  public get $cliente(): Cliente | undefined {
    return this.cliente;
  }

  public set $cliente(cliente: Cliente) {
    this.cliente = cliente;
    cliente.addFactura(this);
  }
  public get $letra(): string {
    return this.letra;
  }

  public set $letra(value: string) {
    this.letra = value;
  }

  public get $numero(): number {
    return this.numero;
  }

  public set $numero(value: number) {
    this.numero = value;
  }

  public get $recargo(): number {
    return this.recargo;
  }
  public set $recargo(value: number) {
    this.recargo = value;
  }
  public get $tipoPago(): TipoPago {
    return this.tipoPago;
  }

  public set $tipoPago(value: TipoPago) {
    this.tipoPago = value;
  }

  public get $totalItems(): number {
    return this.totalItems;
  }

  public set $totalItems(value: number) {
    this.totalItems = value;
  }

  public get $totalFinal(): number {
    return this.totalFinal;
  }

  public set $totalFinal(value: number) {
    this.totalFinal = value;
  }

  public get $fecha(): Date {
    return this.fecha;
  }

  public set $fecha(value: Date) {
    this.fecha = value;
  }
}
