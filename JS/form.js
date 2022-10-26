'use strict';

var list1 = document.getElementById('list1');
var list2 = document.getElementById('list2');
var list3 = document.getElementById('list3');
var list4 = document.getElementById('list4');
var list5 = document.getElementById('list5');

let dropList = [list1, list2, list3, list4, list5];
for (let i = 0; i < dropList.length; i++) {
  dropList[i].getElementsByClassName('anchor')[0].onclick = function (evt) {
    if (dropList[i].classList.contains('visible'))
      dropList[i].classList.remove('visible');
    else
      dropList[i].classList.add('visible');
  }
}

const form = document.querySelector('form');

let allProtein = ['chicken breast', 'chicken thighs', 'pork', 'beef brisket', 'flank steak', 'corned beef', 'ground beef', 'salmon', 'spam', 'egg', 'black beans'];

let allVegFruit = ['garlic', 'ginger', 'onion', 'green onion', 'tomato puree', 'tomato', 'potato', 'green beans', 'peppers', 'mushrooms', 'carrot', 'peas', 'cabbage', 'seaweed', 'hominy', 'guajillo chile', 'cilantro', 'basil', 'lemon', 'lime', 'bok choy', 'edamame'];

let allDairy = ['feta cheese', 'parmesan cheese', 'cheddar cheese', 'milk', 'cream', 'butter', 'coconut milk'];
let allCarbs = ['ramen noodles', 'spaghetti noodles', 'chow mein noodles', 'macaroni', 'bread crumbs', 'rice', 'tortillas', 'bread'];
let allOther = ['turmeric', 'cumin', 'brown sugar', 'cashews', 'sugar', 'sesame oil', 'cornstarch', 'oregano', 'paprika', 'rice vinegar', 'capers', 'pine nuts', 'soy sauce', 'red curry paste', 'oyster sauce', 'garlic powder', 'balsamic vinegar', 'ketchup', 'mustard', 'hoisin sauce', 'red chili flakes', 'beef bouillon', 'stock', 'honey', 'enchilada sauce', 'yellow curry powder',];

let listOne = document.getElementById('proteins');
let listTwo = document.getElementById('vegetables');
let listThree = document.getElementById('dairy');
let listFour = document.getElementById('carbs');
let listFive = document.getElementById('other');

let options = [allProtein, allVegFruit, allDairy, allCarbs, allOther];
let allList = [listOne, listTwo, listThree, listFour, listFive];

for (let i = 0; i < options.length; i++) {
  for (let j = 0; j < options[i].length; j++) {
    let li = document.createElement('li');
    let input = document.createElement('input');
    let label = document.createElement('label');
    input.setAttribute('value', options[i][j]);
    input.type = 'checkbox';
    input.setAttribute('id', options[i][j]);
    label.setAttribute('for', options[i][j]);
    label.innerText = options[i][j];
    allList[i].appendChild(li);
    li.appendChild(input);
    li.appendChild(label);
  }
}



let cb = document.querySelectorAll('input');
let myIngredients = [];
function getMyIngredients(event) {
  event.preventDefault();
  for (let i = 0; i < allCarbs.length + allDairy.length + allOther.length + allProtein.length + allVegFruit.length; i++) {
    if (cb[i].checked === true) {
      myIngredients.push(cb[i].id);
    }
  }
  saveLocalStorage();
  window.location.href = "results.html";
}

let submit = document.getElementById('submit');
submit.addEventListener('click', getMyIngredients);

let results = [];
function saveLocalStorage() {
  for (let i = 0; i < allRecipes.length; i++) {
    let match = true;
    for (let j = 0; j < allRecipes[i].ingredients.length; j++) {
      if (myIngredients.includes(allRecipes[i].ingredients[j])) {

      } else {
        match = false;
        break;
      }
    }
    if (match === true) {
      results.push(allRecipes[i]);

    }
  }
  localStorage.clear();
  let stringData = JSON.stringify(results);
  localStorage.setItem('results', stringData);

}
