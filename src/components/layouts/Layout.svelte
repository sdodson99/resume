<script>
    import { Link } from 'svelte-routing'

    import Breadcrumb from '../../models/breadcrumb.js'

    export let breadcrumbs = [
        new Breadcrumb('Home', '/', false)
    ]

	const linkedinLink = 'https://www.linkedin.com/in/sean-dodson21/';
	const youtubeLink = 'https://www.youtube.com/singletonsean';
	const githubLink = 'https://github.com/sdodson99';
</script>

<div id="root" class="d-flex flex-column">
	<nav class="ss-container mt-3" aria-label="breadcrumb">
		<ol class="breadcrumb m-0 shadow-sm">
			{#each breadcrumbs as bc}
				<li class="{bc.isActive ? "breadcrumb-item active" : "breadcrumb-item"}">
					{#if bc.isActive}
						{ bc.label }
					{:else}
						<Link to="{bc.to}">{ bc.label }</Link>
					{/if}
				</li>
			{/each}
		</ol>
	</nav>
	<div class="mt-5 flex-grow-1 d-flex flex-column">
		<slot></slot>
	</div>
	<div id="footer" class="mt-5 d-flex justify-content-center">
		<div class="my-3 ss-container d-flex justify-content-between">
			<a class="mx-3 pointer" href={linkedinLink} target="_blank"><img src="/images/linkedin.png" alt="LinkedIn" height="50" width="50"/></a>
			<a class="mx-3 pointer" href={youtubeLink} target="_blank"><img src="/images/youtube.png" alt="YouTube" height="50" width="50"/></a>
			<a class="mx-3 pointer" href={githubLink} target="_blank"><img src="/images/github.png" alt="GitHub" height="50" width="50"/></a>
		</div>
	</div>
</div>

<style>

#root {
	min-height: 100vh;
}

.pointer {
	cursor: pointer;
}

.breadcrumb {
	background: var(--color-grayscale-light);
}

#footer {
	border-top: 1px solid var(--color-grayscale-light);
}

</style>