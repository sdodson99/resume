<script>
    import Layout from '../components/Layout.svelte'

    import Breadcrumb from '../models/breadcrumb.js'

    const breadcrumbs = [
        new Breadcrumb('Home', '/', false),
        new Breadcrumb('Projects', 'projects', true)
    ];

</script>

<Layout breadcrumbs={breadcrumbs}>
    <h1 class="text-center">Projects</h1>
</Layout>