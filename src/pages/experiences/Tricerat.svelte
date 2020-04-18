<script>
    import Layout from '../../components/Layout.svelte'
    import UMLClass from '../../components/UMLClass.svelte'

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