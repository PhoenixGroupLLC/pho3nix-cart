import { LitElement, html, css, property, customElement } from 'lit-element';
import './pho3nix-cart-item';
import './pho3nix-cart-form';

@customElement('pho3nix-cart')
export class Pho3nixCart extends LitElement {
  @property({ type: Boolean, reflect: true, attribute: true })
  sticky = false;
  @property({ type: String, reflect: true, attribute: true })
  total = false;

  static get styles() {
    return [
      css`
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          1% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes fade-out {
          0% {
            opacity: 1;
          }
          99% {
            opacity: 0;
          }
          100% {
            opacity: 0;
            display: none;
          }
        }
        :host {
          --open-button-size: 48px;
          --bg-color: black;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          display: flex;
          flex-direction: row;
          overflow: hidden;
          pointer-events: none;
        }
        :host * {
          pointer-events: auto;
        }
        :host(:not([opened])) main {
          margin-left: calc(100% - var(--open-button-size));
        }
        #cover {
          flex: 1;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        :host(:not([opened])) #cover {
          display: none;
        }
        main {
          display: flex;
          flex-direction: row;
          margin-left: 0px;
          transition: all 300ms ease;
          z-index: 1;
        }
        main > div.content {
          flex: 1;
          background: var(--bg-color);
          height: 100%;
          box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.33);
          padding: var(--content-padding, 0);
        }
        main > a {
          margin-top: 15vh;
          border-radius: 50% 0 0 50%;
          background: var(--bg-color);
          color: var(--icon-color);
          width: var(--open-button-size);
          height: var(--open-button-size);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        main > a > svg {
          height: 66%;
          width: auto;
          margin-left: 15%;
        }
      `
    ];
  }

  open = () => {
    this.setAttribute('opened', '');
  }
  close = () => {
    this.removeAttribute('opened');
  }
  toggle = () => {
    this.hasAttribute('opened') ? this.close() : this.open();
  }

  forward = () => {

  }

  protected render() {
   return html`
    <div id="cover" @click=${this.close}> </div>
    <main>
      <a @click=${this.toggle}>
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-shopping-bag fa-w-14 fa-3x"><path fill="currentColor" d="M352 128C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128H0v304c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V128h-96zM224 48c44.112 0 80 35.888 80 80H144c0-44.112 35.888-80 80-80zm176 384c0 17.645-14.355 32-32 32H80c-17.645 0-32-14.355-32-32V176h48v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h160v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h48v256z" class=""></path></svg>
      </a>
      <div class="content">
        <slot name="items"></slot>
        <p> <span>TOTAL:<span><span>${this.total}</span> </p>
        <slot name="form"></slot>
      </div>
      
    </main>
    
   `;
  }
}
