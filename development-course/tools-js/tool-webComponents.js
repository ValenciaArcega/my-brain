class CardElement extends HTMLElement {
  constructor() {
    super()
    this.var
  }

  // to set the name of the attributes that will be in the html tag
  static get observedAttributes() {
    return ['card_name']
  }

  // compare the html attributes wiv local variables
  attributeChangedCallback(Attr, oldValue, newValue) {
    if (Attr == "card_name") {
      this.var = newValue
    }
  }

  // everything here will be display in the browser
  connectedCallback() {
    this.innerHTML = `<p>${this.var}</p>`
  }
}

window.customElements.define("the-card", CardElement)