import { LitElement, html, css } from 'lit';

import './CardComponent';

class SimpleGreeting extends LitElement {
    static styles = css`p { color: red }`;

    static properties = {
        name: { type: String },
    };

    constructor() {
        super();
    }

    render() {
        return html`<p>Hello, ${this.name}! Howdy from the <code>&lt;simple-greeting /&gt;</code> component!</p>`;
    }
}

customElements.define('simple-greeting', SimpleGreeting);
