import { TipoPago } from "./TipoPago.js";
export class Cliente {
    constructor(razonSocial, numero, cuit) {
        this.razonSocial = razonSocial;
        this.numero = numero;
        this.cuit = cuit;
    }
    addFactura(factura) {
        if (!this.facturas) {
            this.facturas = [];
        }
        this.facturas.push(factura);
    }
    get $razonSocial() {
        return this.razonSocial;
    }
    get $numero() {
        return this.numero;
    }
    get $cuit() {
        return this.cuit;
    }
    get $facturas() {
        return this.facturas;
    }
    totalFacturadoXTipoPago() {
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
