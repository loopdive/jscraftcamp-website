import * as page from '../../page-layout';
import stylesheet from './stylesheet.css?inline' assert { type: 'css' };
import template from './template.html?raw' assert { type: 'html' };

export const name = 'home-page';

export { stylesheet, template };

export const dependencies = {
	[page.name]: page
};
