let contenedorbody = document.querySelector("#contenedorEst");
let template = document.getElementById("estado").content;
let fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", async () => {
let res = await fetch("http://localhost:4000/informacion");
let data = await res.json();
let info = data;

//console.log(info);
showData(info)

})

const showData = (info) =>{
    info.forEach(element => {
        // console.log(element.genero);
        const {id, imc, estado, altura, peso, edad, genero} = element

        template.querySelector("#estadoRes").textContent = estado;
        
        const clone = template.cloneNode(true);
    
        fragment.appendChild(clone);
    });
    contenedorbody.appendChild(fragment);    
}



        // template.querySelector("#result-imc").textContent = resultado;
        // template.querySelector("#estado").textContent = masa;
        // template.querySelector("#peso-ideal").textContent = `Peso ideal entre ${ideal_it} - ${ideal_fn} (Kg)`;
        // fragment.appendChild(template);
        // contenedorbody.appendChild(fragment);

        // if (estado == "Por debajo del peso"){
        //     let inferior = estado
        //     // console.log(inferior);
        // }
        // if (estado == "Saludable"){
        //     a1 = estado
        //     // console.log(saludable);
        // }
        // if (estado == "Con sobrepeso"){
        //     let sobrepeso = estado
        //     // console.log(sobrepeso);
        // }
        // if (estado == "Con obesidad" || estado == "Obesidad de alto riesgo"){
        //     let obesidad = estado
        //     // console.log(obesidad);
        // }