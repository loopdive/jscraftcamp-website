import type { Participant } from './participant-schema';

/** get the display name of a participant */
export function displayName(p: Participant): string {
	if (p.realName.hideFamilyNameOnWebsite) {
		return `${p.realName.givenName}`;
	}
	if (p.realName.placeFamilyNameFirst) {
		return `${p.realName.familyName} ${p.realName.givenName}`;
	}
	return `${p.realName.givenName} ${p.realName.familyName}`;
}
