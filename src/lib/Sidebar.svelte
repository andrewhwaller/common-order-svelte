<script lang="ts">
	import {Icon} from '@steeze-ui/svelte-icon';
	import type {IconThemeSource} from '@steeze-ui/svelte-icon';
	import { Bookmark, BookOpen } from '@steeze-ui/heroicons';
	import NavLink from './NavLink.svelte';
	const navItems: ({ name: string; icon: { default: IconThemeSource } & { [p: string]: IconThemeSource }; href: string })[] = [
		{
			name: 'Library',
			href: '/',
			icon: Bookmark
		},
		{
			name: 'Reader',
			href: '/reader',
			icon: BookOpen
		}
	];
</script>

<div class="hidden md:flex md:flex-shrink-0 bg-gray-50">
	<div class="flex flex-col w-50">
		<div class="flex flex-col h-0 flex-1 border-r border-gray-200">
			<div class="flex items-center flex-shrink-0 py-4 pl-2 pr-4">
				<svg
					class="my-auto h-16 w-16 text-red-700 stroke-current fill-current"
					stroke-width="0.5px"
					xmlns="http://www.w3.org/2000/svg"
					data-name="Layer 1"
					viewBox="0 0 128 128"
					><path
						d="M90 18a5 5 0 00-10 0v10h10zm-2 0h-2v-2.816A3 3 0 0188 18zm-4-2.816V18h-2a3 3 0 012-2.816zM82 20h2v6h-2zm4 6v-6h2v6zM48 18a5 5 0 00-10 0v10h10zm-2 0h-2v-2.816A3 3 0 0146 18zm-4-2.816V18h-2a3 3 0 012-2.816zM40 20h2v6h-2zm4 6v-6h2v6z"
					/><path
						d="M85.456 2.1l-.225-.1H42.8l-.225.106A38 38 0 0 0 21 36.261V126h86V36.236A38 38 0 0 0 85.456 2.1zM32.409 45.929A6.926 6.926 0 0 1 34 50v74h-6V50a6.926 6.926 0 0 1 1.591-4.071l.631-.846-.879-.585a3 3 0 1 1 3.314 0l-.879.585zm12 0A6.926 6.926 0 0 1 46 50v74h-6V50a6.926 6.926 0 0 1 1.591-4.071l.631-.846-.879-.585a3 3 0 1 1 3.314 0l-.879.585zm12 0A6.926 6.926 0 0 1 58 50v74h-6V50a6.926 6.926 0 0 1 1.591-4.071l.631-.846-.879-.585a3 3 0 1 1 3.314 0l-.879.585zM63 36.261V124h-3V50a8.33 8.33 0 0 0-1.447-4.484 5 5 0 1 0-7.106 0A8.33 8.33 0 0 0 50 50v74h-2V50a8.33 8.33 0 0 0-1.447-4.484 5 5 0 1 0-7.106 0A8.33 8.33 0 0 0 38 50v74h-2V50a8.33 8.33 0 0 0-1.447-4.484 5 5 0 1 0-7.106 0A8.33 8.33 0 0 0 26 50v74h-3V36.261a36 36 0 0 1 20.025-32.15A36 36 0 0 1 63 36.236zm0-12.025A38.062 38.062 0 0 0 46.923 4.01H63zM65 4.01h16.117A38.052 38.052 0 0 0 65 24.259zm9.409 41.919A6.926 6.926 0 0 1 76 50v74h-6V50a6.926 6.926 0 0 1 1.591-4.071l.631-.846-.879-.585a3 3 0 1 1 3.314 0l-.879.585zm12 0A6.926 6.926 0 0 1 88 50v74h-6V50a6.926 6.926 0 0 1 1.591-4.071l.631-.846-.879-.585a3 3 0 1 1 3.314 0l-.879.585zm12 0A6.926 6.926 0 0 1 100 50v74h-6V50a6.926 6.926 0 0 1 1.591-4.071l.631-.846-.879-.585a3 3 0 1 1 3.314 0l-.879.585zM105 124h-3V50a8.33 8.33 0 0 0-1.447-4.484 5 5 0 1 0-7.106 0A8.33 8.33 0 0 0 92 50v74h-2V50a8.33 8.33 0 0 0-1.447-4.484 5 5 0 1 0-7.106 0A8.33 8.33 0 0 0 80 50v74h-2V50a8.33 8.33 0 0 0-1.447-4.484 5 5 0 1 0-7.106 0A8.33 8.33 0 0 0 68 50v74h-3V36.261a36 36 0 0 1 20.025-32.15A36 36 0 0 1 105 36.236z"
					/></svg
				>
				<div class="flex flex-col mt-1">
					<span
						class="text-3xl tracking-tight text-slate-700 font-bold leading-6 font-display">Common</span
					>
					<span
						class="text-3xl tracking-tight text-slate-700 font-bold leading-6 mt-0.5 font-display">Order</span
					>
				</div>
			</div>
			<div class="flex-1 flex flex-col overflow-y-auto">
				<nav class="flex-1 px-2 py-4">
					{#each navItems as item}
						<NavLink label={item.name} href={item.href}>
							<Icon
								slot="icon"
								src={item.icon}
								theme="outline"
								class="text-blue-500 block h-4 w-4 mr-2"
							/>
						</NavLink>
					{/each}
				</nav>
			</div>
		</div>
	</div>
</div>
