import { LitElement, html, css, property, customElement, TemplateResult } from 'lit-element';
import pureCss from './pure.css';

type InputType = "hidden" | "text" | "search" | "tel" | "url" | "email" | "password" | "datetime" | "date" | "month" | "week" | "time" | "datetime-local" | "number" | "range" | "color" | "checkbox" | "radio" | "file" | "submit" | "image" | "reset" | "button";

type InputOptions = {
    id: string,
    label: string | TemplateResult,
    placeholder?: string,
    message?: string,
    type?: InputType
}

@customElement('pho3nix-cart-form')
export class Pho3nixCartForm extends LitElement {
    @property({ type: String })
    name = '';

    @property({ type: Object })
    model = {};

    static get styles() {
        return [
            pureCss.form,
            pureCss.buttons,
            css``
        ];
    }

    renderInput(options: InputOptions) {
        const label = options.label && html`<label for="${options.id}">${options.label}</label>`;
        const input = html`<input id="${options.id}" type="${options.type || 'text'}" placeholder="${options.placeholder || ''}">`;
        const message = options.message && html`<span class="pure-form-message">${options.message}</span>`;
        return html`${label}${input}${message}`;
    }

    renderNameInput() {
         
    }

    renderAddressInput() {

    }

    renderPhoneNumberInput() {

    }

    renderChoiceInput() {

    }

    renderShippingMethodInput() {
        return this.renderChoiceInput(/*...*/);
    }

    renderPaymentMethodInput() {
        return this.renderChoiceInput(/*...*/);
    }

    protected render() {
        return html`
        <form class="pure-form pure-form-stacked">
            <fieldset>
                <legend>A Stacked Form</legend>
                ${this.renderInput({ type: 'text', id: 'name', label: 'Name', placeholder: 'Name', message: 'This field is required' })}
                ${this.renderInput({ type: 'email', id: 'email', label: 'Email', placeholder: 'Email address', message: 'This field is required' })}

                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Password">

                <label for="state">State</label>
                <select id="state">
                    <option>AL</option>
                    <option>CA</option>
                    <option>IL</option>
                </select>

                <label for="remember" class="pure-checkbox">
                    <input id="remember" type="checkbox"> Remember me
                </label>

                <button type="submit" class="pure-button pure-button-primary">Sign in</button>
            </fieldset>
        </form>
    `;
    }
}