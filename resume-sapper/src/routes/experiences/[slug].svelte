<script context="module">
  export async function preload(page) {
    const { slug } = page.params;

    const response = await this.fetch(`data/experiences/${slug}.json`);

    const experience = await response.json();

    return { experience };
  }
</script>

<script>
  export let experience;

  import PageLayout from '../../components/layouts/PageLayout.svelte';

  import Breadcrumb from '../../models/breadcrumb';

  const {
    name,
    position,
    timeRange,
    location,
    organizationSite,
    description,
    tasks,
    imageUri,
  } = experience;

  const breadcrumbs = [
    new Breadcrumb('Home', '/', false),
    new Breadcrumb('Experiences', 'experiences', false),
    new Breadcrumb(name, `experiences/${name}`, true),
  ];
</script>

<style>
  .logo {
    max-height: 75px;
  }
</style>

<svelte:head>
  <title>{name} - SingletonSean</title>
</svelte:head>

<PageLayout {breadcrumbs}>
  <div class="text-center">
    <img class="logo" src={imageUri} alt="{name} Logo" />
  </div>
  <h1 class="mt-3 text-center">{name}</h1>

  <div class="mt-3 row no-gutters justify-content-center">
    <p class="col-sm text-center">{position}</p>
    <p class="mx-1 d-none d-sm-block">|</p>
    <p class="col-sm text-center">{timeRange}</p>
    <div class="w-100" />
    <p class="col-sm text-center">{location}</p>
    <p class="mx-1 d-none d-sm-block">|</p>
    <p class="col-sm text-center">
      <a href={organizationSite} target="_blank">Organization Site</a>
    </p>
  </div>

  <div class="mt-3">
    {@html description}
  </div>

  <h2 class="mt-5 text-center text-sm-left">Tasks</h2>
  <div class="mt-3">
    <ul class="list-group mx-1">
      {#each tasks as task}
        <li class="list-group-item">{task}</li>
      {/each}
    </ul>
  </div>

</PageLayout>
