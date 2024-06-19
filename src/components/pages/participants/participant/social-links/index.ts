import { instantiate } from '@loopdive/web-components';
import sociallink from './template.html';

const socialNetworks: {
	name: string;
	icon: string;
	url: string;
	alt: string;
}[] = [
	{
		name: 'GitHub',
		icon: 'images/logos/github.svg',
		url: 'https://github.com/{participant.githubAccountName}',
		alt: 'Link to {githubAccountName} on GitHub'
	},
	{
		name: 'X',
		icon: 'images/logos/x.svg',
		url: 'https://x.com/',
		alt: 'Link to @{X} on X'
	},
	{
		name: 'Mastodon',
		icon: 'images/logos/mastodon.svg',
		url: '{mastodon}',
		alt: 'Link to {displayName} on Mastodon'
	},
	{
		name: 'LinkedIn',
		icon: 'images/logos/linkedin.svg',
		url: '{linkedin}',
		alt: 'Link to {displayName} on LinkedIn'
	},
	{
		name: 'Website',
		icon: 'images/logos/website.svg',
		url: '{website}',
		alt: 'Link to website of {displayName}'
	}
];

const t = instantiate(sociallink);

export function socialNetworksSection() {
	const div = document.createElement('div');

	for (const s of socialNetworks) {
		div.appendChild(
			instantiate(t, {
				init: {
					a: {
						href: s.url
					},
					img: {
						src: s.icon,
						alt: s.alt
					}
				}
			}).content
		);
	}

	return div;
}
