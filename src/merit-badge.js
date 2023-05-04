import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button.js";
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";

class MeritBadge extends SimpleColors {
  static properties = {
    ...super.properties,
    header: { type: String },
    date: { type: String },
    logo: { type: String },
    title: { type: String },
    locked: { type: Boolean },
    day: { type: String },
    month: { type: String },
    year: { type: String },
    skills: { type: String },
    activeNode: { type: Object },
    activeNodeTwo: { type: Object },
    skillsOpened: { type: Boolean },
    details: { type: String },
    detailsOpened: { type: Boolean },
    skillsArray: { type: Array },
    detailsArray: { type: Array },
    iconOne: { type: String },
    iconTwo: { type: String },
    iconThree: { type: String },
  };

  static styles = [
    ...super.styles,
    css`
      :host {
        --stichingColor: black;
        --fontColor: black;
      }
      .badge {
        z-index: 5;
        top: 10px;
        left: 10px;
        position: absolute;
        border: 2px dashed var(--stichingColor);
        border-radius: 50%;
        background: linear-gradient(135deg, #ff6b6b, #ffa759);
        color: var(--fontColor);
        text-align: center;
        padding: 50px;
        margin: 20px;
        height: 450px;
        width: 450px;
        padding: 50px 50px 50px 50px;
        box-shadow: 0 0 0 5px var(--simple-colors-default-theme-accent-3),
          1px 0px 5px 0px;
        font-family: "Roboto", sans-serif;
        transition: all 0.3s ease-in-out;
      }

      .lockedBadge {
        z-index: 6;
        top: 10px;
        left: 10px;
        opacity: 85%;
        position: absolute;
        border: 2px dashed var(--stichingColor);
        border-radius: 50%;
        background: linear-gradient(135deg, #7a7a7a, #4a4a4a);
        color: var(--fontColor);
        text-align: center;
        line-height: 200px;
        padding: 50px;
        margin: 20px;
        height: 450px;
        width: 450px;
        padding: 50px 50px 50px 50px;
        box-shadow: 0 0 0 5px var(--simple-colors-default-theme-accent-5),
          1px 0px 5px 0px;
        font-family: "Roboto", sans-serif;
        transition: all 0.3s ease-in-out;
      }

      .curvedDate {
        align-content: center;
        color: black;
      }
      .logoImage {
        align-content: center;
        color: black;
      }
      .title {
        align-content: center;
        font-size: 30px;
      }
      .body {
        justify-content: center;
        font-size: 45px;
        color: 4px solid black;
      }
      .skills {
        background-color: grey;
        padding: 10px;
        margin: 5px;
        border: 4px solid black;
        width: 100%;
        min-width: 100px;
      }
      .detailsTwo {
        background-color: grey;
        padding: 10px;
        margin: 5px;
        border: 4px solid black;
        width: 100%;
        min-width: 100px;
      }

      .curvedTitle {
        position: relative;
        width: 100px;
        height: 100px;
        margin: 0 auto;
        font-size: 35px;
      }

      .curvedTitle span {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 70px;
        height: 300px;
        margin-left: -35px;
        line-height: 530px;
        text-align: center;
        transform-origin: top center;
      }
      path {
        fill: transparent;
        align: center;
      }
      text {
        fill: black;
        align: right;
      }
      .lock {
        width: 80%;
        display: block;
        margin: 0 auto;
      }
      .logo {
        width: 50%;
      }
      simple-icon-button,
      simple-icon {
        width: 50px;
      }
    `,
  ];
  constructor() {
    super();
    this.header = "";
    this.date = this.getDate();
    this.logo = "https://i.imgur.com/75jOypI.png";
    this.title = "Default Title";
    this.iconOne = "check";
    this.iconTwo = "cloud";
    this.iconThree = "code";
    this.activeNode = null;
    this.skillsOpened = false;
    this.detailsOpened = false;
    this.locked = true;
    this.skills = "";
    this.details = "";
    this.skillsArray = MeritBadge.parseArray(this.skills);
    this.detailsArray = MeritBadge.parseArray(this.details);
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.activeNode = this.shadowRoot.querySelector("#skillList");
  }
  detailsClick(e) {
    this.detailsOpened = !this.detailsOpened;
    console.log(this.detailOpened);
  }
  skillClick(e) {
    this.skillsOpened = !this.skillsOpened;
    console.log(this.skillsOpened);
  }

  firstUpdated2(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.activeNodeTwo = this.shadowRoot.querySelector("#detailList");
  }
  getDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return (
      " " + month.toString() + "/" + day.toString() + "/" + year.toString()
    );
  }

  unlockButton() {
    this.locked = !this.locked;
    if (this.locked) {
      this.shadowRoot.querySelector(".lockedBadge").style.visibility =
        "visible";
      this.shadowRoot.querySelector(".badge").style.visibility = "visible";
    } else {
      this.shadowRoot.querySelector(".lockedBadge").style.visibility = "hidden";
      this.shadowRoot.querySelector(".badge").style.visibility = "visible";
    }
  }
  static parseArray(inputString) {
    let skillsArray = [];
    if (inputString) {
      skillsArray = inputString.split(",").map((item) => item.trim());
    }
    return skillsArray;
  }
  renderCurvedTitle(title) {
    const characters = title.split("");
    const circumference = 80; // adjust this to change the curvature
    const radius = circumference / (2 * Math.PI);
    const anglePerChar = 1 / radius;
    const startAngle =
      Math.PI / 2 + ((characters.length - 1) * anglePerChar) / 2;

    return characters.map((char, i) => {
      const angle = startAngle - i * anglePerChar;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      return html`
        <span
          style="position: absolute; transform: translate(${x}px, ${y}px) rotate(${angle -
          Math.PI / 2}rad)"
          >${char}</span
        >
      `;
    });
  }

  render() {
    return html`
      <button @click="${this.unlockButton}">Lock Toggler</button>
      <div class="lockedBadge">
        <img class="lock" src="https://i.imgur.com/njuenE3.png" />
        <h2>
          <div class="curvedTitle">${this.renderCurvedTitle(this.title)}</div>
        </h2>
      </div>
      <div class="badge" ?hidden="${this.locked}">
        ${!this.locked
          ? html`
              <div class="curvedDate">
                <svg viewBox="0 0 500 100" class="body">
                  <path
                    id="curve"
                    d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                  />
                  <text width="100">
                    <textPath
                      xlink:href="#curve"
                      startOffset="50%"
                      text-anchor="middle"
                    >
                      ${this.date}
                    </textPath>
                  </text>
                </svg>
              </div>
            `
          : ""}
        <div class="logoImage">
          <img src="${this.logo}" class="logo" />
        </div>
        <h2>
          <div class="curvedTitle">${this.renderCurvedTitle(this.title)}</div>
        </h2>
        <a href="https://hax.psu.edu/" target="”_blank”">
          <simple-icon
            class="verificationLinkIcon"
            icon="${this.iconOne}"
          ></simple-icon>
        </a>
        <badge-sticker id="skillList">
          <simple-icon-button
            icon="${this.iconTwo}"
            @click="${this.skillClick}"
          ></simple-icon-button>
        </badge-sticker>
        <badge-sticker id="detailList">
          <simple-icon-button
            icon="${this.iconThree}"
            @click="${this.detailsClick}"
          ></simple-icon-button>
        </badge-sticker>
        <absolute-position-behavior
          justify
          position="bottom"
          allow-overlap
          sticky
          auto
          .target="${this.activeNode}"
          ?hidden="${!this.skillsOpened}"
        >
          <ul class="skills">
            ${this.skillsArray.map((item) => html`<li>${item}</li>`)}
          </ul>
        </absolute-position-behavior>
        <absolute-position-behavior
          justify
          position="bottom"
          allow-overlap
          sticky
          auto
          .target="${this.activeNode}"
          ?hidden="${!this.detailsOpened}"
        >
          <ul class="detailsTwo">
            ${this.detailsArray.map((item) => html`<li>${item}</li>`)}
          </ul>
        </absolute-position-behavior>
      </div>
    `;
  }
}
customElements.define("merit-badge", MeritBadge);
