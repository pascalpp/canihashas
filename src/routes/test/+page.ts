import type { CanIUseData } from '../hashas';

export async function load({ fetch }) {
	const response = await fetch(
		// 'https://raw.githubusercontent.com/Fyrd/caniuse/main/features-json/css-has.json'
		'https://raw.githubusercontent.com/pascalpp/canihashas/main/src/routes/sample-canihas.json'
	);

	const json: CanIUseData = await response.json();

	return { json };
}
