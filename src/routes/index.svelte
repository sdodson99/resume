<script>
import { goto } from '@sapper/app';

import Layout from '../components/layouts/Layout.svelte'
import UMLClass from '../components/uml/UMLClass.svelte'

import Breadcrumb from '../models/breadcrumb.js'
import UMLClassFunction from '../models/uml-class-function.js'

const breadcrumbs = [
    new Breadcrumb('Home', '/', true)
]

const umlFunctions = [
    new UMLClassFunction('viewAbout', 'Page<About>', () => goto("/about")),
    new UMLClassFunction('getExperiences', 'List<IExperience>', () => goto("/experiences")),
    new UMLClassFunction('getProjects', 'List<IProject>', () => goto("/projects"))
];
</script>

<svelte:head>
    <title>Home - SingletonSean</title>
</svelte:head>

<Layout breadcrumbs={breadcrumbs}>
    <div class="ss-container flex-grow-1 d-flex justify-content-center">
        <UMLClass umlFunctions={umlFunctions}>
            <div slot="header" class="text-center">
                <img src="singletonsean.png" alt="Logo" height="75" width="75"/>
                <h1 class="mt-3">SingletonSean</h1>
            </div>
        </UMLClass>
    </div>
</Layout>