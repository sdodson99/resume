<script>
	import { goto } from '@sapper/app';

    import UMLListingLayout from './../components/layouts/UMLListingLayout.svelte';

    import Breadcrumb from '../models/breadcrumb.js'
    import UMLClass from '../models/uml-class.js'

    import UMLClassFunction from '../models/uml-class-function.js'

    const breadcrumbs = [
        new Breadcrumb('Home', '/', false),
        new Breadcrumb('Projects', 'projects', true)
    ];

    function createViewProjectFunction(onClick) {
        return new UMLClassFunction('viewProject', 'Page<IProject>', onClick)
    }

    const interfaceFunctions = [
        createViewProjectFunction()
    ];

    const showNTellFunctions = [
        createViewProjectFunction(() => goto("/projects/show-n-tell"))
    ];

    const umlInterface = new UMLClass('IProject', interfaceFunctions, 'lightbulb.png');

    const umlClasses = [
        new UMLClass('ShowNTell', showNTellFunctions)
    ];

</script>

<svelte:head>
    <title>Projects - SingletonSean</title>
</svelte:head>

<UMLListingLayout breadcrumbs={breadcrumbs} 
    umlInterface={umlInterface}
    umlClasses={umlClasses}></UMLListingLayout>