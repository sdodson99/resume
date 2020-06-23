<script>
  import UMLClass from './UMLClass.svelte';

  export let umlClass;
</script>

<UMLClass {umlClass}>
  <div slot="header" class="text-center">
    <div>{'<<Interface>>'}</div>
    <slot name="header" />
  </div>
</UMLClass>
