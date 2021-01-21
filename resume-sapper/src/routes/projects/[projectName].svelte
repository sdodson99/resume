<script context="module">
  export async function preload({ params }) {
    const { projectName } = params;

    const response = await this.fetch(`data/projects/${projectName}.json`);

    const project = await response.json();

    return { project };
  }
</script>

<script>
  import PageLayout from '../../components/layouts/PageLayout.svelte';
  import ListCard from '../../components/content/ListCard.svelte';
  import Breadcrumb from '../../models/breadcrumb';

  export let project;

  const {
    name,
    displayName,
    description,
    imageUrl,
    websiteUrl,
    repositoryUrl,
    demoUrl,
    features,
    technologies,
  } = project;

  const breadcrumbs = [
    new Breadcrumb('Home', '/', false),
    new Breadcrumb('Projects', 'projects', false),
    new Breadcrumb(displayName, `projects/${name}`, true),
  ];
</script>

<style>
  .logo {
    max-height: 75px;
  }
</style>

<svelte:head>
  <title>{displayName} - SingletonSean</title>
</svelte:head>

<PageLayout {breadcrumbs}>
  <div class="text-center">
    <img class="logo" src={imageUrl} alt="{displayName} Logo" />
  </div>
  <h1 class="mt-3 text-center">{displayName}</h1>

  <div class="mt-3 row no-gutters">
    {#if websiteUrl}
      <p class="col-sm text-center">
        <a href={websiteUrl} target="_blank">Project Site</a>
      </p>
      <p class="mx-1 d-none d-sm-block">|</p>
    {/if}
    <p class="col-sm text-center">
      <a href={repositoryUrl} target="_blank">Code</a>
    </p>
    {#if demoUrl}
      <p class="mx-1 d-none d-sm-block">|</p>
      <p class="col-sm text-center">
        <a href={demoUrl} target="_blank">Demo Video</a>
      </p>
    {/if}
  </div>

  <div class="mt-3">{description}</div>

  <h2 class="mt-5 text-center text-sm-left">Features</h2>
  <div class="mt-3">
    <ul class="list-group mx-1">
      {#each features as feature}
        <li class="list-group-item">{feature.description}</li>
      {/each}
    </ul>
  </div>

  <h2 class="mt-5 text-center text-sm-left">Technology</h2>
  <div class="mt-3 row no-gutters">
    {#each technologies as technology}
      <div class="col-sm-6 d-flex">
        <div class="d-flex flex-grow-1 my-3 mx-1">
          <ListCard
            imageUri={technology.imageUrl}
            title={technology.displayName}
            items={technology.concepts.map((c) => c.displayName)} />
        </div>
      </div>
    {/each}
  </div>
</PageLayout>
