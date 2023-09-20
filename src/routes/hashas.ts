export type CanIUseData = {
	stats: Record<string, Record<string, string>>;
};

export default function hashas(json: CanIUseData, name: string): boolean {
	const browser = json.stats[name];
	const versions = Object.keys(browser)
		.map(Number)
		.filter((item) => !isNaN(item));
	const latest = Math.max(...versions);
	const has = browser[latest.toString()] === 'y';

	return has;
}
