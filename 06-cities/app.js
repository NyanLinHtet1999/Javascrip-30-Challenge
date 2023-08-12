
const endpoint =
"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];
let searchInput = document.querySelector("#search");
let suggestions = document.querySelector(".suggestions");
// console.log(searchInput);
fetch(endpoint)
   .then(response => response.json())
   .then(response => cities.push(...response));

// console.log(cities[0]);

function findMatch(wordToSearch, world){
     const regex = new RegExp(wordToSearch, "gi");
     let result = world.filter(x => x.city.match(regex) || x .state.match(regex));
     return result;
}
function displayMatches(){
     let data = findMatch(this.value, cities);
     let html = data.map(x => {
          const regex = new RegExp(this.value, "gi");
          let resultCity = x.city.replace(regex, `<span class = "hl">${this.value}</span>`);
          let resultState = x.state.replace(regex, `<span class = "hl">${this.value}</span>`);
          return `<li><span class= "name">${resultCity} , ${resultState}</span> <span class = "population">${x.population}</span>  
           </li>`
     }).join("");
     suggestions.innerHTML = html;
}
searchInput.addEventListener("keyup", displayMatches);
