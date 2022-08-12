class Tabs {
    #rootTabsEl;
    
    static CLASS_BUTTON = 'tabs__button';
    static CLASS_CONTENT = 'tabs__item';
    static CLASS_OPEN = 'open';
    static MAIN_CONTENT_CLASS = 'tabs__items';
    static MAIN_BUTTON_CLASS = 'tabs__buttons';

    constructor(rootTabsEl) {
        this.#rootTabsEl = rootTabsEl;
        
        this.bindStyles();
        this.createMainElArr();
        this.bindEvents();
        this.bindDataAtr();
        this.defaultDisplay()
    }

    createMainElArr() {
        this.content = document.querySelectorAll(`.${Tabs.CLASS_CONTENT}`);
        this.button = document.querySelectorAll(`.${Tabs.CLASS_BUTTON}`);
    }

    bindStyles() {
        const [mainButtons, mainContentEl] = this.#rootTabsEl.children;
        mainButtons.classList.add(Tabs.MAIN_BUTTON_CLASS);
        mainContentEl.classList.add(Tabs.MAIN_CONTENT_CLASS);

        for (const buttonsEl of mainButtons.children) {
            buttonsEl.classList.add(Tabs.CLASS_BUTTON);
        }
        
        for (const contentEl of mainContentEl.children) {
            contentEl.classList.add(Tabs.CLASS_CONTENT);
        }
    }

    bindEvents() {
        this.#rootTabsEl.addEventListener('click', (e) => this.onButtonClick(e));
    }

    bindDataAtr() {
        for (let i = 0; i < this.button.length; i++){
            this.button[i].setAttribute('data-index', i);
        }
    }

    defaultDisplay() {
        this.button[0].classList.add(Tabs.CLASS_OPEN);
        this.content[0].classList.add(Tabs.CLASS_OPEN);
    }
    
    onButtonClick(e) {
        const buttonEl = e.target;
        
        const atr = buttonEl.getAttribute('data-index');

        if (buttonEl.classList.contains(Tabs.CLASS_BUTTON)) {
            
            this.hideDefaultDisplay();
            
            buttonEl.classList.add(Tabs.CLASS_OPEN);
            this.content[atr].classList.add(Tabs.CLASS_OPEN);
        }
    }

    hideDefaultDisplay() {
        const allOpenButtons = document.querySelectorAll(`.${Tabs.CLASS_OPEN}`);
        allOpenButtons.forEach((el) => el.classList.remove(Tabs.CLASS_OPEN));
    }
}

export default Tabs;