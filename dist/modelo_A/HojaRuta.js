export class HojaRuta {
    constructor(fecha, numero) {
        this.detalles = [];
        this.fecha = fecha;
        this.numero = numero;
    }
    //METODO PARA CALCULAR LOS KILOMETROS TOTALES DE LA HOJA DE RUTA
    //metodo forEach medio parecido al de java con streams, usando una funcion lamda agregamos al total los km 
    // la diferencia entre km regreso y km salida de cada detalle
    calcularTotalKilometros() {
        let totalKm = 0;
        if (this.detalles) {
            this.detalles.forEach(detalle => {
                totalKm += detalle.$kmRegreso - detalle.$kmSalida;
            });
        }
        return totalKm;
    }
    //ACA AGREGO EL DETALLE A LA HOJA DE RUTA Y LA HOJA DE RUTA AL DETALLE
    addDetalle(detalle) {
        if (!this.detalles) {
            this.detalles = [];
        }
        this.detalles.push(detalle);
        detalle.setHojaRuta(this);
    }
    //ACA AGREGO EL VEHICULO A LA HOJA DE RUTA Y LA HOJA DE RUTA AL VEHICULO
    setVehiculo(vehiculo) {
        this.vehiculo = vehiculo;
        vehiculo.addHojaRuta(this);
    }
    /**
     * Getter $fecha
     * @return {Date}
     */
    get $fecha() {
        return this.fecha;
    }
    /**
     * Setter $fecha
     * @param {Date} value
     */
    get $numero() {
        return this.numero;
    }
    get $detalles() {
        return this.detalles;
    }
}
