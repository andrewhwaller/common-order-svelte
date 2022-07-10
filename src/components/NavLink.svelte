<script lang="ts">
	export let label: string;
	export let href: string;
</script>

<a {href} class="text-gray-600 group flex items-center px-1.5 py-1.5 text-xxs rounded-md">
	<slot name="icon" />
	{label}
</a>
