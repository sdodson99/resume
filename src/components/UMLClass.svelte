<script>
    export let umlFunctions = [];
</script>

<div class="flex-grow-1 d-flex flex-column border border-primary rounded">
    <div class="p-3 text-center">
        <slot name="header">
            Header
        </slot>
    </div>
    <div class="border-bottom border-primary"></div>
    <ul class="p-3 flex-grow-1 d-flex flex-column justify-content-around">
        {#each umlFunctions as func}
            <li class="px-1 py-3 function" on:click="{func.onClick}">
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

.function {
    cursor: pointer;
}

a {
    text-decoration: none;
    color: inherit;
}

a:hover {
    color: inherit;
}

</style>