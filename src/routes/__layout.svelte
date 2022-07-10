<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<div>
	<div class="h-screen flex overflow-hidden bg-white">
		<Navbar />
		<div class="flex flex-col w-0 flex-1 h-full overflow-hidden">
			<main id="main" class="flex-1 relative overflow-y-auto focus:outline-none">
				<h1>Common Order</h1>
				<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div class="max-w-3xl mx-auto px-5 sm:px-0">
						<slot />
					</div>
				</div>
			</main>
		</div>
	</div>
</div>
