import {
	getRegistrationState,
	registrationClosessAt,
	registrationOpensAt,
	timeLeft
} from '$lib/participants/registration';
import { writable } from 'svelte/store';
import type { PageData } from './$types';
/* import { base } from '$app/paths';
import InfoBox from '$lib/layout/InfoBox.svelte';
import Logo from '$lib/layout/Logo.svelte';
import PageLayout from '$lib/layout/page/template.html';
import Partners from '$lib/sponsoring/Partners.svelte';
import Sponsors from '$lib/sponsoring/Sponsors2024.svelte';
import Schedule from './Schedule.svelte';
import WhatToExpect from './WhatYouCanExpect.svelte';
import discord from './discord.svg';
import github from './github.svg';
import linkedIn from './linked-in.png';
import mastodon from './mastodon.svg';
import skyline from './skyline.svg';
import twitter from './twitter.svg';
 */
export let data: PageData;

const countdown = writable<string>('');
const registrationState = writable<'not-yet' | 'closed' | 'open'>(getRegistrationState());
const updateCountdown = () => {
	const now = +new Date();
	if (registrationOpensAt <= now && now <= registrationClosessAt) {
		$registrationState = 'closed';
		return;
	}
	const { days, hours, minutes, seconds } = timeLeft(now, registrationOpensAt);
	const timeAsStringArray = [
		days > 0 ? `${days} days` : '',
		hours > 0 ? `${hours} hours` : '',
		minutes > 0 ? `${minutes} minutes` : '',
		seconds > 0 ? `${seconds} seconds` : ''
	].filter((s) => s !== '');

	$countdown =
		timeAsStringArray.length > 1
			? `That's in <strong>${timeAsStringArray.slice(0, -1).join(', ')} and ${
					timeAsStringArray[timeAsStringArray.length - 1]
				}</strong>.`
			: timeAsStringArray.length === 1
				? `Only <strong>${timeAsStringArray[0]}</strong> left!`
				: '';

	setTimeout(updateCountdown, 1000);
};
updateCountdown();
