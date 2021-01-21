<script>
  export let imageUri;
  export let title = '';
  export let items = [];
</script>

<style>
  img {
    max-width: 100%;
    max-height: 100px;
  }
</style>

<div class="card flex-grow-1">
  <div class="card-body d-flex flex-grow-0 flex-column align-items-center">
    {#if imageUri}
      <img src={imageUri} alt={title} />
    {/if}
    <h4 class="card-title mt-3 text-center">{title}</h4>
  </div>
  <ul class="flex-grow-1 list-group list-group-flush">
    {#each items as item}
      <li class="list-group-item">{item}</li>
    {/each}
  </ul>
</div>
