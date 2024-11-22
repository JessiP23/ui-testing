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
            // if someone clicks on up or left decrement the selected item
            case VK_UP:
            case VK_LEFT: {
                // this decrements the selected value
                // when they click the button we dont want it to scroll the page up so we use preventDefault
                e.prevenetDefault();

                if (this.selected === 0) {
                    this.selected = this.radios.length - 1;
                } else {
                    this.selected--;
                }

                break;
            }

            // if someone clicks on down or right increment the selected item
            case VG_DOWN:
            case VK_RIGHT: {
                
                break;
            }
        }
    }

    handleClick(e) {

    }

    set selected(idx) {
        // this is calling our getter
        if (isFinite(this.selected)) {
            let previouslySelected = this.radios(this.selected);
            previouslySelected.tabIndex = -1;
            previouslySelected.removeAttribute('aria-checked', false);
        }

        // set the new button to tabindex 0 and focus it
        let newSelected = this.radios[idx];
        // setting the tabindex to 0
        newSelected.tabIndex = 0;
        newSelected.focus();
        newSelected.setAttribute('aria-checked', true);

        this.setAttribute('selected', idx);
        this._selected = idx;
    }

    //if something requrest the value calls this method
    get selected() {
        return this._selected;
    }
}

window.customElements.define('radio-group', RadioGroup);