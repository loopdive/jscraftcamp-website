import * as InfoBox from '../infobox-layout';
import * as PageLayout from '../page';
import template from './template.html?raw' assert { type: 'html' };

const name = 'photo-layout';
const subcomponents = [InfoBox, PageLayout];
export { name, subcomponents, template };
