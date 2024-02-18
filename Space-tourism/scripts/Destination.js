const content = {
  moon: {
    title: "moon",
    desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    dist: "384,400",
    time: "3 days",
    img: "../assets/destination/image-moon.png",
  },
  mars: {
    title: "mars",
    desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    dist: "255 mil. km",
    time: "9 months",
    img: "../assets/destination/image-mars.png",
  },
  europa: {
    title: "europa",
    desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    dist: "628 mil. km",
    time: "3 years",
    img: "../assets/destination/image-europa.png",
  },
  titan: {
    title: "titan",
    desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    dist: "1.6 bil km",
    time: "7 years",
    img: "../assets/destination/image-titan.png",
  },
};

// const moon = document.getElementById("moon");
// const mars = document.getElementById("mars");
// const europa = document.getElementById("europa");
// const titan = document.getElementById("titan");

const title = document.getElementById("destinationTitle");
const discription = document.getElementById("destinationContent");
const distance = document.getElementById("destDist");
const time = document.getElementById("destTime");
const img = document.getElementById("destinationImage");

var currentActive = "moon";

function updateContent(destination) {
  title.innerText = content[destination].title;
  discription.innerText = content[destination].desc;
  distance.innerHTML = content[destination].dist;
  time.innerHTML = content[destination].time;
  img.setAttribute("src", content[destination].img);

  document.getElementById(currentActive).classList.remove("nav--active");
  document.getElementById(currentActive).classList.add("nav-hover");
  document.getElementById(destination).classList.add("nav--active");
  document.getElementById(destination).classList.remove("nav-hover");
  currentActive = destination;
}

updateContent("moon");
document
  .getElementById("moon")
  .addEventListener("click", () => updateContent("moon"));
document
  .getElementById("mars")
  .addEventListener("click", () => updateContent("mars"));
document
  .getElementById("europa")
  .addEventListener("click", () => updateContent("europa"));
document
  .getElementById("titan")
  .addEventListener("click", () => updateContent("titan"));
