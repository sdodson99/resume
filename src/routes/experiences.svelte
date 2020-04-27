<script>
    import { goto } from '@sapper/app';

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
        createViewExperienceFunction(() => goto("/experiences/tricerat"))
    ];

    const bytelionFunctions = [
        createViewExperienceFunction(() => goto("/experiences/bytelion"))
    ];

    const umlInterface = new UMLClass('IExperience', interfaceFunctions, 'work.png');

    const umlClasses = [
        new UMLClass('Tricerat', triceratFunctions),
        new UMLClass('ByteLion', bytelionFunctions)
    ];

</script>

<svelte:head>
    <title>Experiences - SingletonSean</title>
</svelte:head>

<UMLListingLayout breadcrumbs={breadcrumbs}
    umlInterface={umlInterface}
    umlClasses={umlClasses}></UMLListingLayout>