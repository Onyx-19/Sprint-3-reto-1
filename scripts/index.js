let contenedorbody = document.querySelector("#container-result");
let template = document.getElementById("result").content;
let fragment = document.createDocumentFragment();
let form = document.getElementById("form");
import { estados } from "./data.js";
//Se toman los datos necesarios para realizar el calculo del imc.
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let genero = document.getElementById("id-gender").value;
    let edad = document.getElementById("age").value;
    let peso = document.getElementById("weight").value;
    let altura= document.getElementById("height").value;
    let mts;
    let resultado;
    let ideal_it;
    let ideal_fn;
    let total;
    let masa
//Se determina la formula para calcular el imc.
    mts = (altura / 100);
    total = (mts * mts);
    resultado = peso / total;
    resultado = resultado.toFixed(2);
//Se determina el estado del usuario dependiendo del imc.
    estados.forEach(element => {
        const {min_Masa, max_Masa, estado} = element
        if (resultado >= min_Masa && resultado <= max_Masa){
            masa = estado
        }
    });
//Se almacena la informacion dentro del local storage
    localStorage.setItem ("Genero:", genero);
    localStorage.setItem ("Edad:", edad);
    localStorage.setItem ("Peso:", peso);
    localStorage.setItem ("Altura:", altura);
    localStorage.setItem ("resultado", resultado);
    localStorage.setItem ("Estado:", masa);
//Se calcula el peso ideal de la persona
    ideal_it = total * 18.5;
    ideal_it = ideal_it.toFixed(0)
    ideal_fn = total * 24.9;
    ideal_fn = ideal_fn.toFixed(0)
//Se inserta la informacion dentro del html
    template.querySelector("#result-imc").textContent = resultado;
    template.querySelector("#estado").textContent = masa;
    template.querySelector("#peso-ideal").textContent = `Peso ideal entre ${ideal_it} - ${ideal_fn} (Kg)`;
    fragment.appendChild(template);
    contenedorbody.appendChild(fragment);
//Se almacena la informacion del form en el JSON
    fetch("http://localhost:4000/informacion", {
        method:"POST",
        body: JSON.stringify({
            genero: genero,
            edad: edad,
            peso: peso,
            altura: altura,
            estado: masa,
            imc: resultado
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
        }).then( () => {
            alert("Se ha guardado la informacion correctamente.")
        }).catch(() => {
            alert("Error de conexion")
        })
//Se extrae la informacion registrada en el JSON.

// document.addEventListener("DOMContentLoaded", async () => {
//         let res = await fetch("http://localhost:4000/informacion");
//         let data = res.json();
//         let info = data.results;
//         console.log(info);
//     })

})