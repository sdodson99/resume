<script>
    import Layout from '../../components/Layout.svelte'
    import UMLClass from '../../components/UMLClass.svelte'

    import Breadcrumb from '../../models/breadcrumb.js'

    const breadcrumbs = [
        new Breadcrumb('Home', '/', false),
        new Breadcrumb('Projects', 'projects', false),
        new Breadcrumb('Tricerat', 'projects/tricerat', true)
    ];

</script>

<Layout breadcrumbs={breadcrumbs}>
    <h1 class="text-center">Tricerat</h1>
</Layout>