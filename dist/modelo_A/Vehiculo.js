export class Vehiculo {
    constructor(marca, modelo, patente) {
        this.hojasRuta = [];
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    //ACA AGREGO LA HOJA DE RUTA AL VEHICULO Y EL VEHICULO A LA HOJA DE RUTA
    addHojaRuta(hojaRuta) {
        if (!this.hojasRuta) {
            this.hojasRuta = [];
        }
        this.hojasRuta.push(hojaRuta);
    }
    calcularTotalKilometrosRecorridos(fechaDesde, fechaHasta) {
        let totalKm = 0;
        if (this.hojasRuta) {
            this.hojasRuta.forEach(hojaRuta => {
                if (hojaRuta.$fecha >= fechaDesde && hojaRuta.$fecha <= fechaHasta) {
                    totalKm += hojaRuta.calcularTotalKilometros();
                }
            });
        }
        return totalKm;
    }
    get $hojaRuta() {
        return this.hojasRuta;
    }
    /**
     * Getter $marca
     * @return {string}
     */
    get $marca() {
        return this.marca;
    }
    /**
     * Setter $marca
     * @param {string} value
     */
    set $marca(value) {
        this.marca = value;
    }
    /**
     * Getter $modelo
     * @return {string}
     */
    get $modelo() {
        return this.modelo;
    }
    /**
     * Setter $modelo
     * @param {string} value
     */
    set $modelo(value) {
        this.modelo = value;
    }
    /**
     * Getter $patente
     * @return {string}
     */
    get $patente() {
        return this.patente;
    }
    /**
     * Setter $patente
     * @param {string} value
     */
    set $patente(value) {
        this.patente = value;
    }
}
