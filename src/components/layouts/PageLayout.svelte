<script>
    import Layout from './Layout.svelte';
    
    export let breadcrumbs = [];
</script>

<Layout breadcrumbs={breadcrumbs}>
    <div class="ss-page-container">
        <slot></slot>
    </div>
</Layout>

<style>
.ss-page-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    padding-left: 1.5em;
    padding-right: 1.5em;
}
</style>
