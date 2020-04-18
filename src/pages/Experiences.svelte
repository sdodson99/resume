<script>
    import { navigate } from 'svelte-routing'

	import UMLListingLayout from './../components/layouts/UMLListingLayout.svelte';

    import Breadcrumb from '../models/breadcrumb.js'
    import UMLClassFunction from '../models/uml-class-function.js'
    import UMLClass from '../models/uml-class.js'

    const breadcrumbs = [
        new Breadcrumb('Home', '/', false),
        new Breadcrumb('Experiences', 'experiences', true)
    ];

    function createViewExperienceFunction(onClick) {
        return new UMLClassFunction('viewExperience', 'Page<IExperience>', onClick)
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

    const umlInterface = new UMLClass('IExperience', interfaceFunctions);

    const umlClasses = [
        new UMLClass('Tricerat', triceratFunctions),
        new UMLClass('ByteLion', bytelionFunctions)
    ];

</script>

<UMLListingLayout breadcrumbs={breadcrumbs}
    umlInterface={umlInterface}
    umlClasses={umlClasses}></UMLListingLayout>