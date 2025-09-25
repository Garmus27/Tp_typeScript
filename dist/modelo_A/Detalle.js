export class Detalle {
    constructor(kmSalida, kmRegreso, horaSalida, horaRegreso, minSalida, minRegreso) {
        this.kmSalida = kmSalida;
        this.kmRegreso = kmRegreso;
        this.horaSalida = horaSalida;
        this.horaRegreso = horaRegreso;
        this.minSalida = minSalida;
        this.minRegreso = minRegreso;
    }
    //ACA AGREGO LA HOJA DE RUTA AL DETALLE Y EL DETALLE A LA HOJA DE RUTA
    setHojaRuta(hojaRuta) {
        this.HojaRuta = hojaRuta;
    }
    /**
     * Getter $kmSalida
     * @return {number}
     */
    get $kmSalida() {
        return this.kmSalida;
    }
    /**
     * Setter $kmSalida
     * @param {number} value
     */
    set $kmSalida(value) {
        this.kmSalida = value;
    }
    /**
     * Getter $kmRegreso
     * @return {number}
     */
    get $kmRegreso() {
        return this.kmRegreso;
    }
    /**
     * Setter $kmRegreso
     * @param {number} value
     */
    set $kmRegreso(value) {
        this.kmRegreso = value;
    }
    /**
     * Getter $horaSalida
     * @return {number}
     */
    get $horaSalida() {
        return this.horaSalida;
    }
    /**
     * Setter $horaSalida
     * @param {number} value
     */
    set $horaSalida(value) {
        this.horaSalida = value;
    }
    /**
     * Getter $horaRegreso
     * @return {number}
     */
    get $horaRegreso() {
        return this.horaRegreso;
    }
    /**
     * Setter $horaRegreso
     * @param {number} value
     */
    set $horaRegreso(value) {
        this.horaRegreso = value;
    }
    /**
     * Getter $minSalida
     * @return {number}
     */
    get $minSalida() {
        return this.minSalida;
    }
    /**
     * Setter $minSalida
     * @param {number} value
     */
    set $minSalida(value) {
        this.minSalida = value;
    }
    /**
     * Getter $minRegreso
     * @return {number}
     */
    get $minRegreso() {
        return this.minRegreso;
    }
    /**
     * Setter $minRegreso
     * @param {number} value
     */
    set $minRegreso(value) {
        this.minRegreso = value;
    }
}
