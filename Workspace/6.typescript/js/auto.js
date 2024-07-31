var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    Auto.prototype.setMarca = function (marca) {
        return this.marca = marca;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    return Auto;
}());
/*var auto = new Auto();
auto.marca = "Mazda";
auto.modelo = "CX-5"
auto.año = 2019;
console.log(auto);*/
var auto = new Auto("Ford", "Escape", 2023);
var Deportivo = /** @class */ (function (_super) {
    __extends(Deportivo, _super);
    function Deportivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Deportivo.prototype.setCilindraje = function (cilindraje) {
        this.cilindraje = cilindraje;
    };
    return Deportivo;
}(Auto));
var auto2 = new Deportivo("Ferrari", "Spider", 2023);
auto2.setCilindraje(3500);
console.log(auto2);
