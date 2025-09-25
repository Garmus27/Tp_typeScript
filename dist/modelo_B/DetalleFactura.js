export class DetalleFactura {
    constructor(cantidad, subTotal) {
        this.cantidad = cantidad;
        this.subTotal = subTotal;
    }
    calcularSubtotal() {
        if (this.articulo) {
            this.subTotal = this.cantidad * this.articulo.$precio;
        }
    }
    get $articulo() {
        return this.articulo;
    }
    set $articulo(articulo) {
        this.articulo = articulo;
    }
    get $factura() {
        return this.factura;
    }
    set $factura(factura) {
        this.factura = factura;
        factura.addDetalle(this);
    }
    get $cantidad() {
        return this.cantidad;
    }
    set $cantidad(value) {
        this.cantidad = value;
    }
    get $subTotal() {
        return this.subTotal;
    }
    set $subTotal(value) {
        this.subTotal = value;
    }
}
