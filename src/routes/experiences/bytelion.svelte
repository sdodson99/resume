<script>
    import Layout from '../../components/layouts/Layout.svelte'

    import Breadcrumb from '../../models/breadcrumb.js'

    const breadcrumbs = [
        new Breadcrumb('Home', '/', false),
        new Breadcrumb('Experiences', 'experiences', false),
        new Breadcrumb('ByteLion', 'experiences/bytelion', true)
    ];

</script>

<svelte:head>
    <title>ByteLion - SingletonSean</title>
</svelte:head>

<Layout breadcrumbs={breadcrumbs}>
    <h1 class="text-center">ByteLion</h1>
</Layout>