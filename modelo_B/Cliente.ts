import { Factura } from "./Factura.js";
import { TipoPago } from "./TipoPago.js";

export class Cliente {
  private razonSocial: string;
  private numero: number;
  private cuit: number;
  private facturas?: Factura[];

  constructor(razonSocial: string, numero: number, cuit: number) {
    this.razonSocial = razonSocial;
    this.numero = numero;
    this.cuit = cuit;
  }

  addFactura(factura: Factura): void {
    if (!this.facturas) {
      this.facturas = [];
    }
    this.facturas.push(factura);
  }

  public get $razonSocial(): string {
    return this.razonSocial;
  } 
  public get $numero(): number {
    return this.numero;
  } 
  public get $cuit(): number {
    return this.cuit;
  } 

  public get $facturas(): Factura[] | undefined {
    return this.facturas;
  }

  public totalFacturadoXTipoPago(): void {
    if (this.facturas) {
      let totalEfectivo = 0;
      let totalTarjetaCredito = 0;
      let totalTarjetaDebito = 0;
      let totalCuentaCorriente = 0;
      let totalTransferencia = 0;

      this.facturas?.forEach((factura) => {
        switch (factura.$tipoPago) {
          case TipoPago.E:
            totalEfectivo += factura.$totalFinal;
            break;
          case TipoPago.TC:
            totalTarjetaCredito += factura.$totalFinal;
            break;
          case TipoPago.TD:
            totalTarjetaDebito += factura.$totalFinal;
            break;
          case TipoPago.CC:
            totalCuentaCorriente += factura.$totalFinal;
            break;
          case TipoPago.TR:
            totalTransferencia += factura.$totalFinal;
            break;
        }
      });
    }
  }
}
