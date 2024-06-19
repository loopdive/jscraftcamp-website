import template from './template.html?raw' assert { type: 'html' };

const name = 'participant-box';

export { name, template };

/* 
	import Box from '$lib/layout/Box.svelte';
	import githubLogo from './github.svg';
	import linkedinLogo from './linkedin.svg';
	import mastodonLogo from './mastodon.svg';
	import websiteLogo from './website.svg';
	import xLogo from './x.svg';
	import type { Participant } from '$lib/participants/participant-schema';
	import { displayName } from '$lib/participants/display-name';
	import { createEventDispatcher } from 'svelte';

	export let participant: Participant;
	export let isActive: boolean = false;

	let isShowingDetails = false;
	const hasSocialLink =
		participant.X || participant.mastodon || participant.website || participant.linkedin;

	const dispatch = createEventDispatcher<{ selectedTag: string }>();
 */
