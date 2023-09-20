export async function load({ fetch }) {
	const response = await fetch(
		'https://raw.githubusercontent.com/Fyrd/caniuse/main/features-json/css-has.json'
	);

	const json = await response.json();

	return json;
}
