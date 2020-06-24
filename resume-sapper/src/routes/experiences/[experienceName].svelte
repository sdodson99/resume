<script context="module">
  export async function preload({ params }) {
    const { experienceName } = params;

    const response = await this.fetch(
      `data/experiences/${experienceName}.json`
    );

    const experience = await response.json();

    return { experience };
  }
</script>

<script>
  import PageLayout from '../../components/layouts/PageLayout.svelte';
  import Breadcrumb from '../../models/breadcrumb';

  export let experience;

  const {
    name,
    displayName,
    position,
    timeRange,
    location,
    websiteUrl,
    description,
    tasks,
    imageUrl,
  } = experience;

  const breadcrumbs = [
    new Breadcrumb('Home', '/', false),
    new Breadcrumb('Experiences', 'experiences', false),
    new Breadcrumb(displayName, `experiences/${name}`, true),
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

  <div class="mt-3 row no-gutters justify-content-center">
    <p class="col-sm text-center">{position}</p>
    <p class="mx-1 d-none d-sm-block">|</p>
    <p class="col-sm text-center">{timeRange}</p>
    <div class="w-100" />
    <p class="col-sm text-center">{location}</p>
    <p class="mx-1 d-none d-sm-block">|</p>
    <p class="col-sm text-center">
      <a href={websiteUrl} target="_blank">Organization Site</a>
    </p>
  </div>

  <div class="mt-3">
    {@html description}
  </div>

  <h2 class="mt-5 text-center text-sm-left">Tasks</h2>
  <div class="mt-3">
    <ul class="list-group mx-1">
      {#each tasks as task}
        <li class="list-group-item">{task.description}</li>
      {/each}
    </ul>
  </div>

</PageLayout>
