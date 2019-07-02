"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee col-6 py-2">';
    html += '<h3>' + coffee.name + '<span>' + ' ' + ' ' + coffee.roast +
        '</span>' + '</h3>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function filterCoffees(e) {
    e.preventDefault();
    var coffeeName = myInput.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(coffeeName)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees)
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === 'All') {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function inputCoffee(e) {
    e.preventDefault();
    var newCoffee = {};
    newCoffee.name = userInput.value;
    newCoffee.roast = userRoastSelection.value;
    if (newCoffee.roast === 'light'){
        coffees.unshift(newCoffee);
    } else if (newCoffee.roast === 'dark'){
        coffees.push(newCoffee);
    } else if (newCoffee.roast === 'medium'){
        coffees.splice(4, 0, newCoffee)
    }
    tbody.innerHTML = renderCoffees(coffees);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

var myInput = document.querySelector("#myInput");

var userInput = document.querySelector('#userInput');
var userRoastSelection = document.querySelector('#user-roast-selection');
var userCoffee = document.querySelector('#userSubmit');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
myInput.addEventListener('keyup', filterCoffees);
userCoffee.addEventListener('click', inputCoffee);





//Breakfast items

function renderBreakfast(breakfast) {
    var html = '<div class="breakfast col-6 py-2">';
    html += '<h3>' + breakfast.name + '<span>' + ' ' + ' ' + breakfast.description +
        '</span>' + '</h3>';
    html += '</div>';

    return html;
}

function renderBreakfasts(breakfast) {
    var html = '';
    for(var i = 0; i <= breakfast.length - 1; i++) {
        html += renderBreakfast(breakfast[i]);
    }
    return html;
}

var breakfast = [
    {id: 1, name: 'Breakfast Tacos', description: 'Bacon & Egg, Potato & Egg, Bean & Cheese'},
    {id: 2, name: 'Omelette', description: 'Veggie, Bacon and Cheese, Make Your Own'},
    {id: 3, name: 'Breakfast Croissant', description: 'Egg and Your Choice of Meat'},
    {id: 4, name: 'Bagels', description: 'Plain, Everything, Blueberry, Asiago, Onion, Cheddar, Chocolate Chip, Whole Wheat, Cinnamon Raisin'},
    {id: 5, name: 'Pastries', description: 'Fruit Tarts, Croissants'}
    // {id: 6, name: 'Breakfast', description: 'medium'},
    // {id: 7, name: 'High', description: 'dark'},
    // {id: 8, name: 'Continental', description: 'dark'},
    // {id: 9, name: 'New Orleans', description: 'dark'},
    // {id: 10, name: 'European', description: 'dark'},
    // {id: 11, name: 'Espresso', description: 'dark'},
    // {id: 12, name: 'Viennese', description: 'dark'},
    // {id: 13, name: 'Italian', description: 'dark'},
    // {id: 14, name: 'French', description: 'dark'}
];

var bfbody = document.querySelector('#breakfast');

bfbody.innerHTML = renderBreakfasts(breakfast);
