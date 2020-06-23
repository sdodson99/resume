<script>
  import UMLClass from '../../models/uml-class';

  export let umlClass = new UMLClass();
</script>

<style>
  img {
    max-height: 75px;
    max-width: 75px;
  }

  ul {
    list-style: none;
    margin: 0;
  }

  .ss-border {
    border: 1px solid var(--color-grayscale-light);
  }
</style>

<div class="flex-grow-1 d-flex flex-column ss-border shadow rounded-lg">
  <div class="p-3 text-center">
    <slot name="header" />
    {#if umlClass.imageUri}
      <img class="my-3" src={umlClass.imageUri} alt="{umlClass.name} Image" />
    {/if}
    <h1 class="my-1">{umlClass.name}</h1>
  </div>
  <div class="ss-border border-bottom" />
  <ul class="p-3 flex-grow-1 d-flex flex-column justify-content-around">
    {#each umlClass.umlFunctions as func}
      <li>
        <h3>
          <a
            rel="prefetch"
            class={func.route ? 'px-1 py-3 link' : 'px-1 py-3'}
            href={func.route}>
            + {func.name}(): {func.returnType}
          </a>
        </h3>
      </li>
    {/each}
  </ul>
</div>
