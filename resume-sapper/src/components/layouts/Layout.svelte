<script>
  import Constants from '../../constants';
  import Breadcrumb from '../../models/breadcrumb';

  export let breadcrumbs = [new Breadcrumb('Home', '/', false)];

  const linkedinLink = Constants.LINKEDIN_LINK;
  const youtubeLink = Constants.YOUTUBE_LINK;
  const githubLink = Constants.GITHUB_LINK;
</script>

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

<div id="root" class="d-flex flex-column">
  <nav class="ss-container mt-3" aria-label="breadcrumb">
    <ol class="breadcrumb m-0 shadow-sm">
      {#each breadcrumbs as bc}
        <li class={bc.isActive ? 'breadcrumb-item active' : 'breadcrumb-item'}>
          {#if bc.isActive}
            {bc.label}
          {:else}
            <a rel="prefetch" class="link" href={bc.to}>{bc.label}</a>
          {/if}
        </li>
      {/each}
    </ol>
  </nav>
  <div class="mt-5 flex-grow-1 d-flex flex-column">
    <slot />
  </div>
  <div id="footer" class="mt-5 d-flex justify-content-center">
    <div class="my-3 ss-container d-flex justify-content-between">
      <a class="mx-3 pointer" href={linkedinLink} target="_blank">
        <img src="linkedin.png" alt="LinkedIn" height="50" width="50" />
      </a>
      <a class="mx-3 pointer" href={youtubeLink} target="_blank">
        <img src="youtube.png" alt="YouTube" height="50" width="50" />
      </a>
      <a class="mx-3 pointer" href={githubLink} target="_blank">
        <img src="github.png" alt="GitHub" height="50" width="50" />
      </a>
    </div>
  </div>
</div>
