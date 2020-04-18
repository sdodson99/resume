<script>
    import { navigate } from 'svelte-routing'

    import Layout from '../components/Layout.svelte'
	import UMLInterface from './../components/UMLInterface.svelte';
    import UMLClass from '../components/UMLClass.svelte'

    import Breadcrumb from '../models/breadcrumb.js'

    import UMLClassFunction from '../models/uml-class-function.js'

    const breadcrumbs = [
        new Breadcrumb('Home', '/', false),
        new Breadcrumb('Projects', 'projects', true)
    ];

    function createViewProjectFunction(onClick) {
        return new UMLClassFunction('viewProject', 'Page<Project>', onClick)
    }

    const interfaceFunctions = [
        createViewProjectFunction()
    ];

    const showNTellFunctions = [
        createViewProjectFunction(() => navigate("/projects/show-n-tell", { replace: true }))
    ];

</script>

<Layout breadcrumbs={breadcrumbs}>
    <div class="ss-container d-flex justify-content-center">
        <UMLInterface umlFunctions={interfaceFunctions}>
            <div slot="header" class="text-center">
                <h1>IProject</h1>
            </div>
        </UMLInterface>
    </div>
    <div class="d-flex flex-column flex-lg-row justify-content-center">
        <div class="mt-5 ss-container implementation">
            <UMLClass umlFunctions={showNTellFunctions}>
                <div slot="header" class="text-center">
                    <h1 class="mt-3">ShowNTell</h1>
                </div>
            </UMLClass>
        </div>
    </div>
</Layout>