import * as InfoBox from '../../layout/infobox';
import * as page from '../../layout/page';
import * as expectation from '../../sections/expectation';
import * as partners from '../../sections/schedule';
import * as schedule from '../../sections/schedule';
import * as sponsors from '../../sections/sponsors';
import stylesheet from './stylesheet.css?inline' assert { type: 'css' };
import template from './template.html';

const name = 'home-page';
const subcomponents = [page, InfoBox, schedule, sponsors, partners, expectation];
export { name, stylesheet, subcomponents, template };
