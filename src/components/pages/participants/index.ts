import { LifecycleCallbacks, html, instantiate } from '@loopdive/web-components';
import { displayName } from '../../../data/participants/display-name';
import * as infobox from '../../layout/infobox';
import * as page from '../../layout/page';
import * as participant from './participant';
import template from './template.html?raw' assert { type: 'html' };

const name = 'participants-page';
const subcomponents = [page, infobox, participant];
const lifecycle: LifecycleCallbacks = {
	constructor: function (this: HTMLElement) {
		console.log('constructor');
	},

	attributeChangedCallback: async function (this: HTMLElement, name, oldValue, newValue) {
		console.log('attributeChangedCallback', { name, oldValue, newValue });
		if (name === 'src' && oldValue !== newValue) {
			const participants = await fetch(newValue);

			if (participants.ok) {
				const data = await participants.json();
				console.log(data);
				const ul = this.shadowRoot?.getElementById('participants');

				for (const participant of data) {
					console.log('participant', displayName(participant));

					const p = instantiate(
						html`<li>
							<participant-box>
								${participant.photo
									? `<img
									slot="photo"
									src="${participant.photo}"
									alt="${displayName(participant)}"
									style="border-radius:50%; margin: 25px; width: 250px; height: 250px; object-fit: cover;"
								/>`
									: ''}
								<span slot="name">${displayName(participant)}</span>
								<span slot="company">${participant.company}</span>
							</participant-box>
						</li>`
					);
					ul?.appendChild(p.content);
					console.log('ul', ul, 'participant', participant);
				}
			}
		}
	},
	observedAttributes: ['src']
};
export { lifecycle, name, subcomponents, template };

/* 
import {
	getRegistrationState,
	isRegistrationOpen,
	registrationOpensAt,
	timeLeft
} from '$lib/participants/registration';
import type { Participant as ParticipantT } from 'participants/participant-schema';
import { writable } from 'svelte/store';
import type { PageData } from './$types';

export let data: PageData;

const participants: ParticipantT[] = data.participants;
let activeTag: string | null = null;

const onSelectTag = (e: CustomEvent<string>) => {
	const tag = e.detail;
	activeTag = activeTag === tag ? null : tag;
};
const unsetActiveTag = () => {
	activeTag = null;
};

const noFilter = () => true;
const fridayFilter = (p: ParticipantT) => p.when.friday;
const saturdayFilter = (p: ParticipantT) => p.when.saturday;
const setFridayOrUnset = () =>
	($participantsFilter = $participantsFilter === fridayFilter ? noFilter : fridayFilter);
const setSaturdayOrUnset = () =>
	($participantsFilter = $participantsFilter === saturdayFilter ? noFilter : saturdayFilter);
const participantsFilter = writable<(p: ParticipantT) => boolean>(noFilter);

const registrationState = writable<'not-yet' | 'open' | 'closed'>(getRegistrationState());
const countdown = writable<string>(isRegistrationOpen() ? 'NOW' : 'soon');

const updateCountdown = () => {
	$registrationState = getRegistrationState();

	if ($registrationState !== 'not-yet') {
		return;
	}

	const now = +new Date();
	const { days, hours, minutes, seconds } = timeLeft(now, registrationOpensAt);
	const timeAsStringArray = [
		days > 0 ? `${days} days` : '',
		hours > 0 ? `${hours} hours` : '',
		minutes > 0 ? `${minutes} minutes` : '',
		seconds > 0 ? `${seconds} seconds` : ''
	].filter((s) => s !== '');

	$countdown =
		timeAsStringArray.length > 1
			? `in ${timeAsStringArray.slice(0, -1).join(', ')} and ${
					timeAsStringArray[timeAsStringArray.length - 1]
				}`
			: timeAsStringArray.length === 1
				? `in ${timeAsStringArray[0]}`
				: 'NOW';
	setTimeout(updateCountdown, 1000);
};
updateCountdown();
 */
