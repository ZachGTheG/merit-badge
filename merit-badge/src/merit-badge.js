import { LitElement, html, css } from "lit";

const logo = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

class MeritBadge extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    .container {
      padding-top: 30px;
      padding-left: 10px;
      width: 220px;
      height: 220px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .badge {
      width: 200px;
      height: 200px;
      background: red;
      border-radius: 50%;
      padding: 20px;
      margin: 10px;
      background: #ff0030;
      color: #fff;
      font-size: 21px;
      font-weight: bold;
      line-height: 1.3em;
      border: 2px dashed #fff;
      box-shadow: 0 0 0 4px #ff0030, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
      text-shadow: -1px -1px #aa3030;
      font-weight: normal;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  constructor() {
    super();
    this.header = "My app";
  }

  render() {
    return html`
      <main>
        <div class="container">
          <div class="badge">Badge</div>
        </div>
      </main>
    `;
  }
}

customElements.define("merit-badge", MeritBadge);
