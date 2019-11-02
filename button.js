  const newDiv = document.createElement("div");
    newDiv.id = "new_Div";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.marginTop = "250px";
    document.body.prepend(newDiv);

  class Button {
    constructor(height, width, parentElement){
        this.button = document.createElement("button");
        this.button.innerText = "Button";
        parentElement.append(this.button);
        this.button.style.color = 'black';
        this.button.style.height = `${height}px`;
        this.button.style.width = `${width}px`;
        this.button.addEventListener("mouseenter",() => {
            this.cursorButton();
        })
        this.button.addEventListener("mouseleave",() => {
            console.log("mouse leave");
            this.leftButton();
        })
        this.button.addEventListener("click", () => {
            this.clickingButton();
        })
    }

    cursorButton(){
        this.button.style.backgroundColor = "#ff0";
        this.button.style.transition = "height 2s, background-color 2s";
        this.button.style.fontSize = "20px";
        this.button.style.color = "aqua";
    }

    leftButton(){
        this.button.style.backgroundColor = "silver";
        this.button.style.borderRadius = "5px";
        this.button.style.border = "none";
    }

    clickingButton(){
        this.button.style.transition = "2s";
        this.button.style.transform = "rotate(360deg)";
        setTimeout(() => {
            this.button.style.borderTop = "3px solid black";
        }, 1000);
        setTimeout(() => {
            this.button.style.borderRight = "3px solid black";
        }, 2000)
        setTimeout(() => {
            this.button.style.borderBottom = "3px solid black";
        }, 3000);
        setTimeout(() => {
            this.button.style.borderLeft = "3px solid black";
        }, 4000);

    }
}

  new Button(
    60, 200, newDiv
)