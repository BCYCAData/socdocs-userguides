<script>
	import '@svelteness/kit-docs/client/polyfills/index.js';
	import '@svelteness/kit-docs/client/styles/normalize.css';
	import '@svelteness/kit-docs/client/styles/fonts.css';
	import '@svelteness/kit-docs/client/styles/theme.css';

	import '$lib/styles/soc-techdocs.css';

	import { page } from '$app/stores';

	import { KitDocs, KitDocsLayout, SocialLink, createSidebarContext } from '@svelteness/kit-docs';

	/** @type {import('./$types').LayoutData} */
	export let data;

	$: ({ meta, sidebar } = data);

	/** @type {import('@svelteness/kit-docs').NavbarConfig} */
	const navbar = {
		links: [
			{ title: 'Frequently Asked Questions', slug: '/faqs', match: /\/faqs/ },
			{
				title: 'Recording Your Data',
				slug: '/recording-your-data',
				match: /\/recording-your-data/
			},
			{ title: 'Using Your Data', slug: '/using-your-data', match: /\/using-your-data/ },
			{ title: 'Messaging', slug: '/messaging', match: /\/messaging/ }
		]
	};

	const { activeCategory } = createSidebarContext(sidebar);

	/**
	 * @typedef {'faqs' | 'recording-your-data' | 'using-your-data' | 'messaging'} BookNameKey
	 */
	/**
	 * @type {Object.<BookNameKey, string>}
	 */
	const bookNames = {
		faqs: 'Frequently Asked Questions',
		'recording-your-data': 'Recording Your Data',
		'using-your-data': 'Using Your Data',
		messaging: 'Messaging'
	};

	$: category = $activeCategory ? `${$activeCategory}: ` : '';
	$: title = meta ? `${category}${meta.title} | KitDocs` : null;
	$: description = meta?.description;

	let book = '';
	$: book = $page.url.pathname.split('/')[1];
	$: bookName = bookNames[book];
</script>

<svelte:head>
	{#key $page.url.pathname}
		{#if title}
			<title>{title}</title>
		{/if}
		{#if description}
			<meta name="description" content={description} />
		{/if}
	{/key}
</svelte:head>

<KitDocs {meta}>
	<KitDocsLayout {navbar} {sidebar}>
		<div class="socials" slot="navbar-right-alt">
			<SocialLink type="gitHub" href="https://github.com/sveltejs/svelte" />
		</div>
		<div class="logo" slot="navbar-left">
			<a href="/">
				<img height="24" src="/SOCLogo_quarter.png" alt="SOC Documentation" />
				<h1 style="padding-left: 20px; font-size: 1.5em; color:#050B17">SOC Documentation</h1>
			</a>
		</div>
		<div slot="sidebar-top">
			<h1 class="bookName">{bookName}</h1>
		</div>
		<div slot="main-top">Main Top</div>
		<div slot="main-bottom">Main Bottom</div>
		<slot />
	</KitDocsLayout>
</KitDocs>

<style>
	:global(:root) {
		--kd-color-brand-rgb: 234, 88, 12;
	}

	:global(:root.dark) {
		--kd-color-brand-rgb: 213, 149, 76;
	}

	.logo :global(a) {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo :global(svg) {
		height: 36px;
		overflow: hidden;
	}

	.bookName {
		font-size: 20px;
		font-weight: bolder;
		color: tomato;
	}
</style>
