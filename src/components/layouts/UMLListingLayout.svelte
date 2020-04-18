<script>
    import Layout from './Layout.svelte';
    
	import UMLInterface from './../uml/UMLInterface.svelte';
	import UMLClass from './../uml/UMLClass.svelte';

    export let umlInterface = {};
    export let umlClasses = [];
    export let breadcrumbs = [];
</script>

<Layout breadcrumbs={breadcrumbs}>
    <div class="ss-container">
        <UMLInterface umlFunctions={umlInterface.umlFunctions}>
            <div slot="header" class="text-center">
                <h1>{ umlInterface.name }</h1>
            </div>
        </UMLInterface>
    </div>
    <div class="row mx-0 justify-content-center">
        {#each umlClasses as umlClass}
            <div class="ss-container mt-5">
                <UMLClass umlFunctions={umlClass.umlFunctions}>
                    <div slot="header" class="text-center">
                        <h1 class="mt-3">{ umlClass.name }</h1>
                    </div>
                </UMLClass>
            </div>
        {/each}
    </div>
</Layout>