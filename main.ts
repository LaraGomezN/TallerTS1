import {Serie} from './serie.js'
import {series} from './data.js'

let seriesTable: HTMLElement = document.getElementById("series")!;
let promedioTable: HTMLElement = document.getElementById("promedio")!;


mostrarSeries(series);
let promedio: number = calcularPromedio(series);
promedioTable.textContent = `Seasons average: ${promedio}`


function mostrarSeries(xd: Serie[]): void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for(let serie of xd)
        {
            let trElement:HTMLElement = document.createElement("tr");
            trElement.innerHTML = `<td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>`
            seriesTbody.appendChild(trElement)
        }
        seriesTable.appendChild(seriesTbody)

}

function calcularPromedio(xd: Serie[]): number{
    let sumaTemporadas:number = 0;
    for(let serie of xd)
        {
            sumaTemporadas+=serie.seasons;
        }
    return Math.round(sumaTemporadas/xd.length);
}

