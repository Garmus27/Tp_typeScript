export class Articulo {
    constructor(codigo, denominacion, precio, unidadMedida) {
        this.codigo = codigo;
        this.denominacion = denominacion;
        this.precio = precio;
        this.unidadMedida = unidadMedida;
    }
    addDetalleFactura(detalle) {
        if (!this.detallesFactura) {
            this.detallesFactura = [];
        }
        this.detallesFactura.push(detalle);
        detalle.$articulo = this;
    }
    get $detallesFactura() {
        return this.detallesFactura;
    }
    get $codigo() {
        return this.codigo;
    }
    set $codigo(value) {
        this.codigo = value;
    }
    get $denominacion() {
        return this.denominacion;
    }
    set $denominacion(value) {
        this.denominacion = value;
    }
    get $precio() {
        return this.precio;
    }
    set $precio(value) {
        this.precio = value;
    }
    get $unidadMedida() {
        return this.unidadMedida;
    }
    set $unidadMedida(value) {
        this.unidadMedida = value;
    }
}
