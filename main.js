// QUERY SELECTORS:

// var options = document.querySelector(".radio");
var sideButton = document.querySelector("#side");
var mainButton = document.querySelector("#main");
var dessertButton = document.querySelector("#dessert");
var entireMealButton = document.querySelector("#entire-meal");
var letsCookButton = document.querySelector(".lets-cook");
var cookingPotImage = document.querySelector(".cooking-pot");
var clearButton = document.querySelector(".clear-button");
var mealButton = document.querySelector(".meal-button");
var addNewButton = document.querySelector(".add-new");

var firstBoxSection = document.querySelector(".box1");
var secondBoxSection = document.querySelector(".box2");
var dish = document.querySelector(".dish");

var addRecipeButton = document.querySelector(".add-recipe");
var newRecipeForm = document.querySelector(".recipe-form");
var dishOptions = document.querySelector(".dish-options");

var currentDish;


//EVENT LISTENERS:
sideButton.addEventListener("click", chooseSide);
mainButton.addEventListener("click", chooseMain);
dessertButton.addEventListener("click", chooseDessert);
entireMealButton.addEventListener("click", chooseEntireMeal);
letsCookButton.addEventListener("click", displayDish);
clearButton.addEventListener("click", clearSection);
mealButton.addEventListener("click", displayEntireMeal);
addNewButton.addEventListener("click", addNewDish);
addRecipeButton.addEventListener("click", displayNewRecipeForm);


//FUNCTIONS:
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function enableLetsCookButton() {
  if(dish.innerText.length === 0){
    letsCookButton.classList.remove("hidden");
    letsCookButton.disabled = false;
    mealButton.classList.add("hidden");
  }
}

function displayNewRecipeForm() {
  newRecipeForm.classList.remove("hidden")
  console.log("adf");
}

function disableLetsCookButton() {
  letsCookButton.disabled = true;
}


function chooseSide() {
  enableLetsCookButton();
  currentDish = sides[getRandomIndex(sides)];
}

function chooseMain() {
  enableLetsCookButton();
  currentDish = mains[getRandomIndex(mains)];
}

function chooseDessert() {
  enableLetsCookButton();
  currentDish = desserts[getRandomIndex(desserts)];
}

function chooseEntireMeal(){
  enableMealButton();
  currentDish = new Meal(
    mains[getRandomIndex(mains)],
    sides[getRandomIndex(sides)],
    desserts[getRandomIndex(desserts)]
  );
}

function displayDish() {
  cookingPotImage.classList.add("hidden");
  dish.classList.remove("hidden");
  clearButton.classList.remove("hidden");
  dish.insertAdjacentHTML("afterbegin", `
  <a class="statement">You should make:</a>
  <a class="chosen-dish">${currentDish}!</a>
  `);
  disableLetsCookButton();
}

function clearSection() {
  dish.innerText = "";
  clearButton.classList.add("hidden");
  cookingPotImage.classList.remove("hidden");
  enableLetsCookButton()
}

function enableMealButton() {
  if(dish.innerText.length === 0) {
    letsCookButton.classList.add("hidden");
    letsCookButton.disabled = true;
    mealButton.classList.remove("hidden");
    mealButton.disabled = false;
  }
}

function hideMealButton() {
  letsCookButton.classList.remove("hidden");
  letsCookButton.disabled = true;
  mealButton.classList.add("hidden");
  mealButton.disabled = true;
}

function displayEntireMeal() {
  cookingPotImage.classList.add("hidden");
  dish.classList.remove("hidden");
  clearButton.classList.remove("hidden");
  dish.insertAdjacentHTML("afterbegin", `
  <a class="statement">You should make:</a>
  <a class="chosen-meal">${currentDish.main} with a side of ${currentDish.side} and a ${currentDish.dessert} for dessert!</a>
  `);
  hideMealButton();
}

function addNewDish() {
  var recipeName = document.querySelector(".name-input");
  var recipeType = document.querySelector(".type-input");
  if(recipeType.value === "Side"){
    sides.unshift(recipeName.value);
  } else if(recipeType.value === "Main Dish"){
    mains.unshift(recipeName.value);
  } else if(recipeType.value === "Dessert"){
    desserts.unshift(recipeName.value);
  }
}
