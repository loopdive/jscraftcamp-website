import { CustomElementConfig } from '@loopdive/web-components';
import * as page from '../../page-layout';
import stylesheet from './stylesheet.css?inline' assert { type: 'css' };
import template from './template.html?raw' assert { type: 'html' };

export const name = 'home-page';
export { stylesheet, template };
export const subcomponents = [page];

export default {
	name,
	stylesheet,
	template,
	subcomponents
} as CustomElementConfig;
