const VK_LEFT = 37;
const VK_UP = 38;
const VK_RIGHT = 39;
const VK_DOWN = 40;

class RadioGroup extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback() {
        this.setAttribute('role', 'radiogroup');

        // query all the radio children
        this.radios = Array.from(this.querySelectorAll('radio-button'));

        // setup initial state
        // is mapped to a select5ed property
        if (this.hasAttribute('selected')) {
            let selected = this.getAttribute('selected');
            this._selected = selected;
            this.radios[selected].setAttribute('tabindex', 0);
            this.radios[selected].setAttribute('aria-checked', 'true');
        } else {
            this._selected = 0;
            this.radios[0].setAttribute('tabindex', 0);
        }
    }

    handleKeyDown(e) {
        switch(e.keyCode) {
            case VK_UP:
                case VK_LEFT: {
                    
                    break;
                }
        }
    }

    handleClick(e) {

    }

    set selected(idx) {
        
    }

    get selected() {

    }
}

window.customElements.define('radio-group', RadioGroup);