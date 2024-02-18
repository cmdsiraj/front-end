const content = {
  crew1: {
    designation: "commander",
    name: "dougals harey",
    info: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: "../assets/crew/image-douglas-hurley.png",
  },
  crew2: {
    designation: "mission specialist",
    name: "mark shuttleworth",
    info: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: "../assets/crew/image-mark-shuttleworth.png",
  },
  crew3: {
    designation: "pilot",
    name: "victor glover",
    info: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    img: "../assets/crew/image-victor-glover.png",
  },
  crew4: {
    designation: "flight engineer",
    name: "anousheh ansari",
    info: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    img: "../assets/crew/image-anousheh-ansari.png",
  },
};

var currActive = "dot1";

function setContent(name) {
  document.getElementById("designation").innerText = content[name].designation;
  document.getElementById("name").innerText = content[name].name;
  document.getElementById("info").innerText = content[name].info;
  document.getElementById("img").setAttribute("src", content[name].img);

  document.getElementById(currActive).classList.remove("dot--active");
  document.getElementById(currActive).classList.add("dot--hover");
  currActive = `dot${name[5]}`;

  document.getElementById(currActive).classList.remove("dot--hover");
  document.getElementById(currActive).classList.add("dot--active");
}

document
  .getElementById("dot1")
  .addEventListener("click", () => setContent("crew1"));
document
  .getElementById("dot2")
  .addEventListener("click", () => setContent("crew2"));
document
  .getElementById("dot3")
  .addEventListener("click", () => setContent("crew3"));
document
  .getElementById("dot4")
  .addEventListener("click", () => setContent("crew4"));
