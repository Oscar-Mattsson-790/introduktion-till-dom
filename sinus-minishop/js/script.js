// Code here!
// console.log(document);

const h3Potato = document.querySelector("h3");
h3Potato.innerText = "Potato";
// console.log(h3Potato);

const navLinkStart = document.querySelector("nav :nth-child(1)");
navLinkStart.innerText = "Start";
// console.log(navLinkStart);

const navLinkMailUs = document.querySelector("nav :nth-child(3)");
navLinkMailUs.innerText = "Mail Us";
// console.log(navLinkMailUs);

// version2
// const sinusFireP = document.getElementsByClassName("art-2")[0].childNodes[7];
// sinusFireP.innerText = "A lot of red but Awesome";
// console.log(sinusFireP);

const sinusFireP = document.querySelector(".art-2 :nth-child(4)");
sinusFireP.innerText = "A lot of red but Awesome";
// console.log(sinusFireP);

const sinusWaterBtn = document.querySelector(".art-3 :nth-child(5)");
sinusWaterBtn.innerText = "order";
sinusWaterBtn.style.backgroundColor = "blue";
// console.log("button", sinusWaterBtn);

const sinusFireFigureBackground = document.querySelector(
  ".art-2 :nth-child(1)"
);
sinusFireFigureBackground.style.backgroundColor = "blue";
// console.log(sinusFireFigureBackground);

const whereWeAreAddress = document.querySelectorAll(
  "footer section article p"
)[0];
whereWeAreAddress.innerText = [
  "Sinus skateboards Blåklintvägen 45 Arboga 342 22",
];
// console.log(whereWeAreAddress);

const pageParagraphs = document
  .querySelectorAll("p")
  .forEach((p) => (p.style.color = "red"));
