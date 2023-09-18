// create a new unordered list (ul) element
const list = document.createElement("ul");

// remove the paragraph element in the nav-bar
document.querySelector("nav > p").remove();

// add your new ul element to the nav-bar
document.querySelector("nav").appendChild(list);

// create two new list item (li) elements, and add some text to them
const listOne = document.createElement("li");
listOne.textContent = "item1";

const listTwo = document.createElement("li");
listTwo.textContent = "item2";

// add the li elements to the ul in the nav-bar
list.appendChild(listOne);
list.appendChild(listTwo);
