// Custom elements allow to create our own HTML tags with specific behaviors and styles. 

// create my own custom elements in html

// constructor is a special method in JavaScript classes that is called when a new instance of the class is created.

// extending the native html element
class RadioButton extends HTMLElement {
    // this is just for like making sure that properly setup the current class

    // this constructor ensures that the object is correctly is set up
    constructor() {
        super();
    }

    // every custom element has its own lifecycle methods that hook to run my own code
    connectedCallback() {
        // this is the first method that runs when the element is added to the DOM
        this.setAttribute('role', 'radio');
        this.setAttribute('tabindex', -1);
        this.setAttribute('aria-checked', 'false'); 
    }
}

window.customElements.define('radio-button', RadioButton);