<script>
    import { navigate } from 'svelte-routing'

    import Layout from '../components/Layout.svelte'
	import UMLInterface from './../components/UMLInterface.svelte';
    import UMLClass from '../components/UMLClass.svelte'

    import Breadcrumb from '../models/breadcrumb.js'
    import UMLClassFunction from '../models/uml-class-function.js'

    const breadcrumbs = [
        new Breadcrumb('Home', '/', false),
        new Breadcrumb('Experiences', 'experiences', true)
    ];

    function createViewExperienceFunction(onClick) {
        return new UMLClassFunction('viewExperience', 'Page<Experience>', onClick)
    }

    const interfaceFunctions = [
        createViewExperienceFunction()
    ];

    const triceratFunctions = [
        createViewExperienceFunction(() => navigate("/experiences/tricerat", { replace: true }))
    ];

    const bytelionFunctions = [
        createViewExperienceFunction(() => navigate("/experiences/bytelion", { replace: true }))
    ];

</script>

<Layout breadcrumbs={breadcrumbs}>
    <div class="ss-container d-flex flex-column">
        <div id="interface">
            <UMLInterface umlFunctions={interfaceFunctions}>
                <div slot="header" class="text-center">
                    <h1>IExperience</h1>
                </div>
            </UMLInterface>
        </div>
    </div>
    <div class="d-flex flex-column flex-lg-row justify-content-center">
        <div class="mt-5 ss-container implementation">
            <UMLClass umlFunctions={triceratFunctions}>
                <div slot="header" class="text-center">
                    <h1 class="mt-3">Tricerat</h1>
                </div>
            </UMLClass>
        </div>
        <div class="mt-5 ss-container implementation">
            <UMLClass umlFunctions={bytelionFunctions}>
                <div slot="header" class="text-center">
                    <h1 class="mt-3">Bytelion</h1>
                </div>
            </UMLClass>
        </div>
    </div>
</Layout>