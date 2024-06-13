import '@fontsource/poppins';
import '@fontsource/poppins/600.css';
import '@fontsource/source-sans-pro';
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/700.css';
import {
	CustomElementConfig,
	defineCustomElement,
	formatHTML,
	getInnerHTML,
	html
} from '@loopdive/web-components';
import homepage from './routes/page';

defineCustomElement(homepage as CustomElementConfig);

window.onload = async () => {
	document.body.innerHTML = html`<home-page></home-page>`.string;

	console.log(await formatHTML(await getInnerHTML(document.body, { includeShadowRoots: true })));
};
