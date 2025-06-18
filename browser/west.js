plants = ["../sprites/Hungry_plant.gif", "../sprites/pipeplant.gif", "../sprites/planta3.gif"]


for (let i = 0; i < 200; i++) {
  plant = document.createElement("img");
  plant.src = plants[Math.floor(Math.random() * plants.length)];
  let top = Math.floor(Math.random() * 99) + 1;
  let left = Math.floor(Math.random() * 99) + 1;
  plant.style.position = "absolute";
  plant.style.top = top + "%";
  plant.style.left = left + "%";
  plant.style["z-index"] = 0;

  document.body.appendChild(plant);
}

nano = document.getElementById("nanoDos");
nano.addEventListener('click', downloadNano);

function downloadNano(){
  computer = window.top;
  console.log(computer.document.title);
  const dataToSend = ["NanoDOS", "ware"];
  computer.postMessage(dataToSend, "*");
}