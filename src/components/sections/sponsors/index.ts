import { instantiate } from '@loopdive/web-components';
import sponsors from '../../../../public/2024/sponsors/list.json';
import { Sponsor } from '../../../svelte/lib/sponsoring/is-sponsor';
import * as box from '../../layout/box';
import sponsorTemplate from './sponsor.html?raw' assert { type: 'html' };
import template from './template.html?raw' assert { type: 'html' };

const name = 'sponsors-section';
const lifecycle = {
	constructor(this: HTMLElement) {
		console.log('constructor');
		const { shadowRoot } = this;

		const list = shadowRoot?.getElementById('list');
		sort(sponsors);

		for (const sponsor of sponsors) {
			console.log(sponsor);
			list?.appendChild(
				instantiate(sponsorTemplate, {
					init: {
						'#image': {
							src: sponsor.image,
							alt: sponsor.name,
							style: sponsor.style
						},
						'#link': {
							href: sponsor.link
						},
						'#name': {
							textContent: sponsor.name
						}
					}
				}).content
			);
		}
	}
};

const subcomponents = [box];

export { lifecycle, name, subcomponents, template };

export let title: string;

export function sort(sponsors: Sponsor[]) {
	return sponsors.sort((a, b) => a.name.localeCompare(b.name));
}
