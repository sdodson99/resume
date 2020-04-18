<script>
    import Layout from '../../components/layouts/Layout.svelte'

    import Breadcrumb from '../../models/breadcrumb.js'

    const breadcrumbs = [
        new Breadcrumb('Home', '/', false),
        new Breadcrumb('Experiences', 'experiences', false),
        new Breadcrumb('Tricerat', 'experiences/tricerat', true)
    ];

</script>

<Layout breadcrumbs={breadcrumbs}>
    <h1 class="text-center">Tricerat</h1>
</Layout>