"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
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
    newCoffee.name = userInput;
    newCoffee.roast = userRoastSelection;
    coffees.push(newCoffee);
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

// <form>
// <h3>Roast</h3>
// <label for="user-roast-selection"></label>
//     <select id="user-roast-selection">
//      <option>light</option>
//      <option>medium</option>
//      <option>dark</option>
//     </select>
//     <h3>Coffee Name</h3>
// <input type="text" id="userInput" placeholder="">
//
//     <input id="userSubmit" type="submit" />
//     </form>