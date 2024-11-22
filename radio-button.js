// create my own custom elements in html

// extending the native html element
class RadioButton extends HTMLElement {
    // this is just for like making sure that properly setup the current class
    constructor() {
        super();
    }

    // every custom element has its own lifecycle methods that hook to run my own code
    connectedCallback() {
        this.setAttribute('role', 'radio');
        this.setAttribute('tabindex', -1);
        this.setAttribute('aria-checked', 'false'); 
    }
}

window.customElements.define('radio-button', RadioButton);