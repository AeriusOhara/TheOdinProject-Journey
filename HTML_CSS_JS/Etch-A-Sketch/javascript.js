var CANVAS =  800;

function initGame(){
    console.log("Initializing game!");
    createDivs(46);

    // addEventListeners()
}

function createDivs(amount){
    // Generate (amount * amount) divs (maximum 64)
    // default: 16

    const canvas = document.querySelector("section");

    for(var i = 0; i < amount; i++){
        for(var j = 0; j < amount; j++){

            // Create element
            const pixel = document.createElement('div');
            pixel.style.width = Math.min((CANVAS/amount));
            pixel.style.height = Math.min((CANVAS/amount)); 

            // Add element to the "canvas"
            canvas.appendChild(pixel);
        }
    }

    addEventListeners();   
}

function addEventListeners(){
    const allDivs = document.querySelectorAll("div");

    // Add two eventListeners to each div, one that monitors a mouse
    // hovering over it, and the other the mouse exiting (no longer
    // hovering over it) and have the eventListeners "toggle" the 
    // "hover" class onto the divs as we hover/exit them
    allDivs.forEach(curDiv => {
        curDiv.addEventListener('mouseenter', (e) => {
            curDiv.classList.toggle("hover")
            curDiv.style.backgroundColor = 
        });

        curDiv.addEventListener('mouseleave', (e) => {
            curDiv.classList.toggle("hover");
        });
    });

    console.log("Added EventListeners to all divs.");
}

console.log("Successfully loaded the JS file.");
document.onload = initGame();
console.log("JS file init'd successfully.");
