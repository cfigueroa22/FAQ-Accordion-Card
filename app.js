const arrowOne = document.querySelector(".arrow-icon-one");
const arrowTwo = document.querySelector(".arrow-icon-two");
const arrowThree = document.querySelector(".arrow-icon-three");
const arrowFour = document.querySelector(".arrow-icon-four");
const arrowFive = document.querySelector(".arrow-icon-five");
const answerOne = document.querySelector(".answer-one");
const answerTwo = document.querySelector(".answer-two");
const answerThree = document.querySelector(".answer-three");
const answerFour = document.querySelector(".answer-four");
const answerFive = document.querySelector(".answer-five");

const rotateArrowOne = () => {
  arrowOne.classList.toggle("rotate");
  answerOne.classList.toggle("hidden");
};

const rotateArrowTwo = () => {
  arrowTwo.classList.toggle("rotate");
  answerTwo.classList.toggle("hidden");
};

const rotateArrowThree = () => {
  arrowThree.classList.toggle("rotate");
  answerThree.classList.toggle("hidden");
};

const rotateArrowFour = () => {
  arrowFour.classList.toggle("rotate");
  answerFour.classList.toggle("hidden");
};

const rotateArrowFive = () => {
  arrowFive.classList.toggle("rotate");
  answerFive.classList.toggle("hidden");
};

arrowOne.addEventListener("click", rotateArrowOne);
arrowTwo.addEventListener("click", rotateArrowTwo);
arrowThree.addEventListener("click", rotateArrowThree);
arrowFour.addEventListener("click", rotateArrowFour);
arrowFive.addEventListener("click", rotateArrowFive);
