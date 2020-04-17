<script>
    import Layout from '../components/Layout.svelte'

    import Breadcrumb from '../models/breadcrumb.js'

    const breadcrumbs = [
        new Breadcrumb('Home', '/', false),
        new Breadcrumb('About', 'about', true)
    ];

</script>

<Layout breadcrumbs={breadcrumbs}>
    <h1 class="text-center">About</h1>
</Layout>