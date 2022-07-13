<script lang="ts">
	import { page } from '$app/stores';
	export let label: string;
	export let href: string;
</script>

<a {href}
	 class="{$page.url.pathname === href ? 'bg-gray-200' : ''}"
>
	<slot name="icon" />
	{label}
</a>

<style>
	a {
		@apply text-gray-600 flex items-center px-1 py-1 text-xxs rounded-md;
	}
</style>
