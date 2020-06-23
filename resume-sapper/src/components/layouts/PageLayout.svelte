<script>
  import Layout from './Layout.svelte';

  export let breadcrumbs = [];
</script>

<style>
  .ss-page-container {
    max-width: 800px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5em;
    padding-right: 1.5em;
  }
</style>

<Layout {breadcrumbs}>
  <div class="ss-page-container">
    <slot />
  </div>
</Layout>
