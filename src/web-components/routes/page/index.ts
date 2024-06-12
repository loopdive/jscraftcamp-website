import * as page from '../../page-layout';
import styles from '../../styles.css?inline' assert { type: 'css' };
import template from './template.html?raw' assert { type: 'html' };

export const name = 'home-page';
export { styles, template };

console.log(styles);

export const subcomponents = [page];
