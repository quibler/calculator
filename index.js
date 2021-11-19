let display = document.getElementById("disp");
let buttons = document.querySelectorAll("button");

let mem = "";
for(button of buttons) {
    button.addEventListener("click", (e) => {
        pressed = e.target.innerText;
        console.log(mem);
        if(pressed == '=') {
            mem = eval(mem);
            display.value = mem;
        } else if(pressed == "Clear") {
            mem = "";
            display.value = "";
        } else {
            if(pressed == '%') {
                mem += "/100*";
            } else {
                mem += pressed;
            }
            display.value += pressed;
        }
    })
}