import { LitElement, html, css } from 'lit';

class CardComponent extends LitElement {

    static properties = {
        title: { type: String },
        content: { type: String },
        action: { type: String },
        actionName: { type: String }
    };

    static styles = css`
    .container {
        display: flex;
        margin: 5%;
        align-items: center;
        justify-content: center;
        font-family: "Gill Sans", sans-serif;
    }
    .card {
        padding: 10px;
        border: 1px solid #a0a0a0;
        border-radius: 8px;
        box-shadow: 4px 4px 4px 2px #ddd;
    }
    .card-title {
        font-size: 1.6rem;
    }
    .card-text {
        font-size: 1.2rem;
    }
    .btn-primary {
        text-decoration: none;
        color: #fff;
        background-color: #2124fc;
        padding: 10px;
        margin: 5px;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    `;
    render() {
        return html`
        <div class="container">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text">${this.content}</p>
                    <a href="${this.action}" class="btn-primary">${this.actionName}</a>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('bootstrap-card', CardComponent);
