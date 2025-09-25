export class Factura {
    constructor(letra, numero, recargo, tipoPago, totalItems, totalFinal, fecha) {
        this.letra = letra;
        this.numero = numero;
        this.recargo = recargo;
        this.tipoPago = tipoPago;
        this.totalItems = totalItems;
        this.totalFinal = totalFinal;
        this.fecha = fecha;
    }
    calcularTotalItems() {
        if (this.detalles) {
            this.detalles.forEach((detalle) => {
                this.totalItems += detalle.$subTotal;
            });
        }
    }
    calcularTotalFinal() {
        this.totalFinal = this.totalItems + this.recargo;
    }
    addDetalle(detalle) {
        if (!this.detalles) {
            this.detalles = [];
        }
        this.detalles.push(detalle);
    }
    get $detalles() {
        return this.detalles;
    }
    /**
     * Getter $cliente
     * @return {Cliente | undefined}
     */
    get $cliente() {
        return this.cliente;
    }
    set $cliente(cliente) {
        this.cliente = cliente;
        cliente.addFactura(this);
    }
    get $letra() {
        return this.letra;
    }
    set $letra(value) {
        this.letra = value;
    }
    get $numero() {
        return this.numero;
    }
    set $numero(value) {
        this.numero = value;
    }
    get $recargo() {
        return this.recargo;
    }
    set $recargo(value) {
        this.recargo = value;
    }
    get $tipoPago() {
        return this.tipoPago;
    }
    set $tipoPago(value) {
        this.tipoPago = value;
    }
    get $totalItems() {
        return this.totalItems;
    }
    set $totalItems(value) {
        this.totalItems = value;
    }
    get $totalFinal() {
        return this.totalFinal;
    }
    set $totalFinal(value) {
        this.totalFinal = value;
    }
    get $fecha() {
        return this.fecha;
    }
    set $fecha(value) {
        this.fecha = value;
    }
}
