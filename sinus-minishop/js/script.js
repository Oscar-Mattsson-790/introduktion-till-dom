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

const whereWeAreAddress = document.querySelector("footer section article p");
whereWeAreAddress.innerText =
  "Sinus skateboards \n Blåklintvägen 45 \n Arboga 342 22";
// console.log(whereWeAreAddress);

const pageParagraphs = document.querySelectorAll("p");
// .forEach((p) => (p.style.color = "red"));
pageParagraphs[0].style.color = "red";
pageParagraphs[1].style.color = "red";
pageParagraphs[2].style.color = "red";
pageParagraphs[3].style.color = "red";
// console.log(pageParagraphs);

const pageBtns = document.querySelectorAll("button");
// .forEach((button) => (button.innerText = "add to cart"));
pageBtns[0].innerText = "add to cart";
pageBtns[1].innerText = "add to cart";
pageBtns[2].innerText = "add to cart";
// console.log(pageBtns);

const addClassActive = document.querySelector("footer section article a");
addClassActive.classList = "active";
// console.log(addClassActive);

const removeClassLogo = document.querySelector("header img");
removeClassLogo.classList.remove("logo");
// console.log(removeClassLogo);

const imgLogo = document.querySelector("img");
// console.log(imgLogo);
imgLogo.addEventListener("click", () => {
  console.log("found you!");
});

const allArticle = document.querySelectorAll("article");
console.log(allArticle);
allArticle[0].addEventListener("click", () => {
  console.log("Hi, Im article Fire/Ash/Water");
});
allArticle[1].addEventListener("click", () => {
  console.log("Hi, Im article Fire/Ash/Water");
});
allArticle[2].addEventListener("click", () => {
  console.log("Hi, Im article Fire/Ash/Water");
});
