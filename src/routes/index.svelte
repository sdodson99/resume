<script>
    import { goto } from '@sapper/app';

    import Layout from '../components/layouts/Layout.svelte'
    import UMLClassComponent from '../components/uml/UMLClass.svelte'

    import Breadcrumb from '../models/breadcrumb.js'
    import UMLClass from '../models/uml-class.js'
    import UMLClassFunction from '../models/uml-class-function.js'

    const breadcrumbs = [
        new Breadcrumb('Home', '/', true)
    ]

    const umlFunctions = [
        new UMLClassFunction('viewAbout', 'Page<About>', () => goto("/about")),
        new UMLClassFunction('getProjects', 'List<IProject>', () => goto("/projects")),
        new UMLClassFunction('getExperiences', 'List<IExperience>', () => goto("/experiences"))
    ];

    const umlClass = new UMLClass('SingletonSean', umlFunctions, 'singletonsean.png');
</script>

<svelte:head>
    <title>Home - SingletonSean</title>
</svelte:head>

<Layout breadcrumbs={breadcrumbs}>
    <div class="ss-container flex-grow-1 d-flex justify-content-center">
        <UMLClassComponent umlClass={umlClass}/>
    </div>
</Layout>