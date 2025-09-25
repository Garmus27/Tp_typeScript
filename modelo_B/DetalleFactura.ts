import { Articulo } from "./Articulo.js";
import { Factura } from "./Factura.js";

export class DetalleFactura{
    private cantidad: number    
    private subTotal: number
    private articulo?: Articulo;
    private factura?: Factura;

    constructor(cantidad: number, subTotal: number){
        this.cantidad = cantidad;
        this.subTotal = subTotal;
    }

    public calcularSubtotal(): void {
        if (this.articulo) {
            this.subTotal = this.cantidad * this.articulo.$precio;

    }}

    public get $articulo(): Articulo | undefined {
        return this.articulo;
    }

    public set $articulo(articulo: Articulo) {
        this.articulo = articulo;
    }

    public get $factura(): Factura | undefined {
        return this.factura;
    }

    public set $factura(factura: Factura) {
        this.factura = factura;
        factura.addDetalle(this);
    }
    
    public get $cantidad(): number {
        return this.cantidad;
    }

    public set $cantidad(value: number) {
        this.cantidad = value;
    }

    public get $subTotal(): number {
        return this.subTotal;
    }

    public set $subTotal(value: number) {
        this.subTotal = value;
    }



}