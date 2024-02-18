const content = {
  one: {
    heading: "launch vechicle",
    content:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    img: "../assets/technology/image-launch-vehicle-portrait.jpg",
  },
  two: {
    heading: "spaceport",
    content:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    img: "../assets/technology/image-spaceport-portrait.jpg",
  },
  three: {
    heading: "space capsule",
    content:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    img: "../assets/technology/image-space-capsule-portrait.jpg",
  },
};

var currentActive = "one";

function setContent(name) {
  document.getElementById("heading").innerText = content[name].heading;
  document.getElementById("content").innerText = content[name].content;
  document.getElementById("img").setAttribute("src", content[name].img);

  document.getElementById(currentActive).classList.remove("active");
  document.getElementById(name).classList.add("active");
  currentActive = name;
}

document
  .getElementById("one")
  .addEventListener("click", () => setContent("one"));
document
  .getElementById("two")
  .addEventListener("click", () => setContent("two"));
document
  .getElementById("three")
  .addEventListener("click", () => setContent("three"));
