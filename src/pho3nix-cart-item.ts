import { LitElement, html, css, property, customElement } from 'lit-element';

@customElement('pho3nix-cart-item')
export class Pho3nixCartItem extends LitElement {
  @property({ type: String })
  name = '';
  @property({ type: Number })
  quantity = 0;
  @property({ type: String })
  price = '';
  @property({ type: String })
  subtotal = '';
  @property({ type: String })
  img = '';

  static get styles() {
    return [
      css`
      :host {
        display: flex;
        flex-direction: row;
        max-height: 64px;
        color: var(--font-color, --icon-color);
        align-items: center;
        min-width: 600px;
      }
      :host * {
        
      }
      img {
        padding: 0em 1em 0em 0em;
        max-height: 64px;
      }
      .name {
        padding: 0em 1em;
        flex: 4;
      }
      .subtotal {
        padding: 0em 1em;
        min-width: 7em;
        text-align: right;
        white-space: nowrap;
      }
      .price {
        flex: 1;
        padding: 0em 1em;
        text-align: right;
        white-space: nowrap;
      }
      .quantity {
        min-width: 2.5em;
        padding: 0em 1em;
        text-align: center;
        white-space: nowrap;
      }
      a {
        min-width: 24px;
        min-height: 24px;
        transition: color 300ms ease;
        color: var(--icon-color, --font-color);
      }
      a:hover {
        color: red;
      }
      `
    ];
  }
  protected render() {
    return html`
      <a>
        ${this.img ? 
            html`<img src="${this.img}">` : 
            html`<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="file-image" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-file-image fa-w-12 fa-3x"><path fill="currentColor" d="M159 336l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0l-39 39L63 448h256V304l-55.5-55.5c-4.7-4.7-12.3-4.7-17 0L159 336zm96-50.7l32 32V416H95.1l.3-67.2 15.6-15.6 48 48c20.3-20.3 77.7-77.6 96-95.9zM127 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm0-96c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm242.9-62.1L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5zM352 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304z" class=""></path></svg>`
        }
      </a>
      <p class="name">${this.name}</p>
      <p class="price">${this.price}</p>
      <a class="plus">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-plus-circle fa-w-16 fa-3x"><path fill="currentColor" d="M384 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm120 16c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48 0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z" class=""></path></svg>
      </a>
      <p class="quantity">${this.quantity}</p>
      <a class="minus">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="minus-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-minus-circle fa-w-16 fa-3x"><path fill="currentColor" d="M140 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4 12-12 12H140zm364-28c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48 0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z" class=""></path></svg>
      </a>
      <p class="subtotal">${this.subtotal}</p>
      <a class="remove">
      <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-trash-alt fa-w-14 fa-3x"><path fill="currentColor" d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z" class=""></path></svg>
      </a>
    `;
  }
}