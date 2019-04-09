const wrapper = document.querySelector('.wrapper');

class Button {
    constructor(options) {
        const {
            width,
            height,
            parentElement = document.body,
            onClick = () => {}
    } = options;
        
    this.button = document.createElement('button');
    this.button.innerHTML = 'button';
    this.button.style.width = `${width}px`;
    this.button.style.height = `${height}px`;
    this.button.style.transition = `all .25s`;
    this.button.style.backgroundColor = 'blue';
    this.button.style.fontSize ='25px';
    this.button.style.color = 'white';
    this.button.style.margin = '21%';
    this.button.style.borderRadius = '6px';
    this.button.style.outline = 'none';
    this.button.style.border = 'none';
    this.button.style.cursor = 'pointer';
    
    this.button.addEventListener('click', (event) => {
        this.animateButton();
        onClick(event);
    })
    this.appendToElement(parentElement);
    }
    animateButton() {
        this.button.style.transform = 'rotate(180deg)';
        this.button.style.backgroundColor = 'red';
        this.button.style.fontSize ='40px';
        this.button.style.color = 'black';
        // this.button.style.opacity = "0";
        setTimeout(() => {
            this.button.style.transform = 'rotate(360deg)';
            this.button.style.backgroundColor = 'blue';
            this.button.style.fontSize ='25px';
            this.button.style.color = 'white';
            // this.button.style.opacity = "1";
        },2000);
    }
    appendToElement(element) {
        if(!element instanceof HTMLElement) {
            throw new Error('Element is not instance of HTMLElement');
        }
        element.append(this.button);
    }
}


const button = new Button({
    width: 300,
    height: 70,
    parentElement: wrapper,
    onClick: function(event) {
        alert('Wrapper click');
    }
});
const button2 = new Button({
    width: 200,
    height: 40,
    onClick: function(event) {
        alert('Body click!')
    }
});