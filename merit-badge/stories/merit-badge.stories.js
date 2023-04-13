import { html } from 'lit';
import '../src/merit-badge.js';

export default {
  title: 'MeritBadge',
  component: 'merit-badge',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <merit-badge
      style="--merit-badge-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </merit-badge>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
