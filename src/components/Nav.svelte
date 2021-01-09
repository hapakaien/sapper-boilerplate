<script lang="ts">
	export let segment: string;
</script>

<style>
	[aria-current] {
		@apply relative inline-block;
	}

	[aria-current]::after {
		@apply absolute empty w-9/12 h-1 bg-red-500 block -bottom-0;
	}
</style>

<nav class="border-b border-red-200 font-light px-4">
	<ul class="after:empty after:block after:clear-both">
		<li class="block float-left">
			<a
				class="block no-underline py-4 px-2"
				aria-current={segment === undefined ? 'page' : undefined}
				href=".">home</a>
		</li>
		<li class="block float-left">
			<a
				class="block no-underline py-4 px-2"
				aria-current={segment === 'about' ? 'page' : undefined}
				href="about">about</a>
		</li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li class="block float-left">
			<a
				class="block no-underline py-4 px-2"
				rel="prefetch"
				aria-current={segment === 'blog' ? 'page' : undefined}
				href="blog">blog</a>
		</li>
	</ul>
</nav>
