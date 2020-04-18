<script>
	import UMLClass from './UMLClass.svelte';

    export let umlFunctions;
</script>

<UMLClass umlFunctions={umlFunctions}>
    <div slot="header" class="text-center">
        <div>{ '<<Interface>>' }</div>
        <slot name="header"/>
    </div>
</UMLClass>