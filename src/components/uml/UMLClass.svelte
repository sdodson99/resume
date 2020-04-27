<script>
    import UMLClass from '../../models/uml-class'

    export let umlClass = new UMLClass();
</script>

<div class="flex-grow-1 d-flex flex-column ss-border shadow rounded-lg">
    <div class="p-3 text-center">
        <slot name="header"/>
        {#if umlClass.imageUri}
            <img class="my-3" src={ umlClass.imageUri} alt="Class Image" height="75px" width="75px"/>
        {/if}
        <h1>{ umlClass.name }</h1>
    </div>
    <div class="ss-border border-bottom"></div>
    <ul class="p-3 flex-grow-1 d-flex flex-column justify-content-around">
        {#each umlClass.umlFunctions as func}
            <li class="{func.onClick ? 'px-1 py-3 link' : 'px-1 py-3'}" on:click="{func.onClick}">
                <h3>+ { func.name }(): { func.returnType }</h3>
            </li>
        {/each}
    </ul>
</div>

<style>

ul {
    list-style: none;
    margin: 0;
}

.ss-border {
    border: 1px solid var(--color-grayscale-light);
}

</style>