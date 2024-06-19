import { CustomElementConfig, defineCustomElement, html } from '@loopdive/web-components';
import * as home from './home';
import * as imprint from './imprint';
import * as participants from './participants';

/** Route to the given path */
export async function route(path: string) {
	let page: CustomElementConfig;
	let markup: string;

	switch (path) {
		case '/participants':
			page = participants;
			markup = html`<${page.name} src="2024/participants/index.json"></${page.name}>`.toString();
			break;
		case '/imprint':
			page = imprint;
			markup = html`<${page.name}></${page.name}>`.toString();
			break;
		case '/':
		default:
			page = home;
			markup = html`<${page.name}></${page.name}>`.toString();
			break;
	}

	// Define the custom element if it hasn't been defined yet
	if (!customElements.get(page.name)) {
		defineCustomElement(page);
	}

	// Render the custom element
	document.body.innerHTML = markup;
}
