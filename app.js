const cuadro = document.querySelectorAll(".cuadrado");
const tiempofaltante = document.querySelector("#tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoactual = tiempofaltante.textContent;

function cuadradoazar {
  cuadro.forEach(nombredeclase => {
  nombredeclase.classList.remove("topo");
})
let posicionalazar = cuadrado  [Math.floor (Math.randon() * 9)]
posicionalazar.classList.add("topo");
posiciontopo.posicionalazar.Id
}
cuadro.forEach (identificador => {
  identificador.addEventListener("click" () => {
    if (identificador.Id === posiciontopo) {
      resultado = resultado + 1;
      puntaje.textContent = resultado;
      posiciontopo = null;
    }
  });
});

function movertopo (){
  tiempoanual--;
  tiempofaltante.textContent = tiempoactual;
  if (tiempoactual=== 0){
    clearInterval(idtiempo);
    clearInterval(tiempotopo);
    alert("se acabó el tiempo tu puntaje fue" + resultado + "topos atrapdos");
  }
}