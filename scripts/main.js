import { series } from './data.js';
var seriesTable = document.getElementById("series");
var promedioTable = document.getElementById("promedio");
mostrarSeries(series);
var promedio = calcularPromedio(series);
promedioTable.textContent = "Average Seasons: ".concat(promedio);
function mostrarSeries(xd) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, xd_1 = xd; _i < xd_1.length; _i++) {
        var serie = xd_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n            <td>").concat(serie.name, "</td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}
function calcularPromedio(xd) {
    var sumaTemporadas = 0;
    for (var _i = 0, xd_2 = xd; _i < xd_2.length; _i++) {
        var serie = xd_2[_i];
        sumaTemporadas += serie.seasons;
    }
    return Math.round(sumaTemporadas / xd.length);
}
