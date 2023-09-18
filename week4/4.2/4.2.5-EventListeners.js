// add an event listener to the dog picture that listens for a "click" and gives an alert
const pic = document.querySelector("#dog-picture"); {
pic.addEventListener("click" , () =>
    alert("You clicked it!) 
    };


// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
const handleMouseover = (event) => {

}
const allItems = document.querySelector("li");
for (let i of allItems) {
    console.log(i);
    i.addEventListener("mouseover", handleMouseover)
}

// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
window.addEventListener("keypress, (event)" => )