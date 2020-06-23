<script>
  import Layout from './Layout.svelte';

  import UMLInterface from '../uml/UMLInterface.svelte';
  import UMLClass from '../uml/UMLClass.svelte';

  export let umlInterface = {};
  export let umlClasses = [];
  export let breadcrumbs = [];
</script>

<Layout {breadcrumbs}>
  <div class="ss-container">
    <UMLInterface umlClass={umlInterface} />
  </div>
  <div class="row mx-0 justify-content-center">
    {#each umlClasses as umlClass}
      <div class="ss-container mt-5">
        <UMLClass {umlClass} />
      </div>
    {/each}
  </div>
</Layout>
