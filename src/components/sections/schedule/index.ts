import Sortable from 'sortablejs';
import * as PersonLink from '../../elements/person-link';
import * as InfoBox from '../../layout/infobox';
import template from './template.html?raw' assert { type: 'html' };

const name = 'schedule-section';
const subcomponents = [InfoBox, PersonLink];
const lifecycle = {
	constructor: function (this: HTMLElement) {
		const { shadowRoot } = this;
		const fridaySchedule = shadowRoot?.getElementById('schedule-friday');
		console.log(fridaySchedule);
		if (fridaySchedule) {
			Sortable.create(fridaySchedule, {
				animation: 150,
				group: 'schedule'
			});
		}

		const saturdaySchedule = shadowRoot?.getElementById('schedule-saturday');
		console.log(saturdaySchedule);
		if (saturdaySchedule) {
			Sortable.create(saturdaySchedule, {
				animation: 150,
				group: 'schedule'
			});
		}
	}
};

export { lifecycle, name, subcomponents, template };
