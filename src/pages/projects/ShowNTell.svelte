<script>
    import Layout from '../../components/layouts/Layout.svelte'

    import Breadcrumb from '../../models/breadcrumb.js'

    const breadcrumbs = [
        new Breadcrumb('Home', '/', false),
        new Breadcrumb('Projects', 'projects', false),
        new Breadcrumb("Show 'N Tell", 'projects/show-n-tell', true)
    ];

</script>

<Layout breadcrumbs={breadcrumbs}>
    <h1 class="text-center">Show 'N Tell</h1>
    <div class="ss-container mt-3 text-center">
        <h3><a href="http://snt.seandodson.com" target="_blank">Project Site</a></h3>
    </div>
</Layout>