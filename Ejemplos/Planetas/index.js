 import { solar_system_data } from "./solar_system_data.js"
        let planets = [];

        document
            .getElementById("bt-add-planet")
            .addEventListener("click", addPlanet);

        function addPlanet() {
            let planet = document.getElementById("planet").value;
            document.getElementById("planet").value = "";
            planets.push(planet);
            if (planets.length === 3) {
                const data = searchPlanets(planets);
                document.getElementById("info-planets").innerHTML = "";
                for (let planet = 0; planet < data.length; planet++) {
                    document.getElementById("info-planets").innerHTML += `
                  <div class="card" id="${data[planet].nombre}">
                    <h3>${data[planet].nombre}</h3>
                    <img src="${data[planet].imagen}">
                    <p>tipo: ${data[planet].tipo}</p>
                    <p>distancia_media_sol_km: ${data[planet].distancia_media_sol_km}</p>
                    <p>diametro_km: ${data[planet].diametro_km}</p>
                    <button onclick="document.getElementById('${data[planet].nombre}').style.backgroundColor='${data[planet].color}'">color</button>
                  </div>
                `;

                planets = [];
            }
        }
    }

        function getColor(id, color) {
            document.getElementById(id).style.backgroundColor = color;
        }

        function searchPlanets(planets) {
            const foundPlanets = [];
            const data = solar_system_data
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < planets.length; j++) {
                    if (planets[j].toLowerCase() == data[i].nombre.toLowerCase()) {
                        foundPlanets.push(data[i]);
                    }
                }
            }
            return foundPlanets;
        }
