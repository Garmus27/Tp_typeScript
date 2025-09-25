import { DetalleFactura } from "./DetalleFactura.js";

export class Articulo{
    private codigo: number;
    private denominacion: string;
    private precio: number;
    private unidadMedida: string;
    private detallesFactura?: DetalleFactura[];


    constructor(codigo: number, denominacion: string, precio: number, unidadMedida: string){
        this.codigo = codigo;
        this.denominacion = denominacion;
        this.precio = precio;
        this.unidadMedida = unidadMedida;
    }

    addDetalleFactura(detalle: DetalleFactura): void {
        if (!this.detallesFactura) {
            this.detallesFactura = [];
        }
        this.detallesFactura.push(detalle);
        detalle.$articulo = this;
    }

    public get $detallesFactura(): DetalleFactura[] | undefined {
        return this.detallesFactura;
    }


    public get $codigo(): number {
        return this.codigo;
    }

    public set $codigo(value: number) {
        this.codigo = value;
    }

    public get $denominacion(): string {
        return this.denominacion;
    }

    public set $denominacion(value: string) {
        this.denominacion = value;
    }

    public get $precio(): number {
        return this.precio;
    }

    public set $precio(value: number) {
        this.precio = value;
    }
    public get $unidadMedida(): string {
        return this.unidadMedida;
    }

    public set $unidadMedida(value: string) {
        this.unidadMedida = value;
    }




}