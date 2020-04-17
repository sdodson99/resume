<script>
    import Layout from '../components/Layout.svelte'

    import Breadcrumb from '../models/breadcrumb.js'

    const breadcrumbs = [
        new Breadcrumb('Home', '/', false),
        new Breadcrumb('Experiences', 'experiences', true)
    ];

</script>

<Layout breadcrumbs={breadcrumbs}>
    <h1 class="text-center">Experiences</h1>
</Layout>