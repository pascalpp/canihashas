<script lang="ts">
	import './page.less';
	import type { PageData } from './$types';
	import hashas from './hashas';

	export let data: PageData;

	let has = hashas(data.json, 'firefox');
	let answer = has ? 'YES!' : 'NO';
</script>

<svelte:head>
	<title>can i has :has?</title>
	<meta name="description" content="The question on every web developer’s mind." />
	<meta property="og:title" content="can i has :has?" />
	<meta property="og:description" content="The question on every web developer’s mind." />
	<meta property="og:url" content="https://canihashas.com" />
	<meta property="og:site_name" content="can i has :has?" />
	<meta property="og:image" content="https://canihashas.com/canihascat-og-preview.jpg" />
</svelte:head>

<main>
	<div class="row">
		<figure class="cat" style="--deg: -2deg">
			<a href="https://caniuse.com/css-has">
				<img src="/canihascat.jpg" alt="I can has :has? {answer}" />
				<h1 class="question" data-text="CAN I HAS :HAS?">CAN I HAS :HAS?</h1>
				<h1 class="answer" data-text={answer}>{answer}</h1>
			</a>
		</figure>
		<figure class="well-actually" style="--deg: 3deg">
			<p class="has-support">
				Your browser supports :has, but the latest version of Firefox doesn’t yet. <a
					href="https://bugzilla.mozilla.org/show_bug.cgi?id=1853701">Hopefully soon!</a
				>
			</p>
			<p class="no-support">
				Your browser doesn’t support :has. But most do, so <a
					href="https://bugzilla.mozilla.org/show_bug.cgi?id=1853701">hopefully yours will soon!</a
				>
			</p>
		</figure>
	</div>
</main>
