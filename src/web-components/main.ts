import '@fontsource/poppins';
import '@fontsource/poppins/600.css';
import '@fontsource/source-sans-pro';
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/700.css';
import { customElement, html } from '@loopdive/web-components';
import * as homepage from './routes/page';

customElement(homepage);

const l = html`<home-page></home-page>`;

window.onload = () => {
	console.log('window.onload');

	document.body.appendChild(l.content);
};
