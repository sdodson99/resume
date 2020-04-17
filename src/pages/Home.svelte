<script>
import { navigate } from 'svelte-routing'

import Layout from '../components/Layout.svelte'
import UMLClass from '../components/UMLClass.svelte'

import Breadcrumb from '../models/breadcrumb.js'
import UMLClassFunction from '../models/uml-class-function.js'

const breadcrumbs = [
    new Breadcrumb('Home', '/', true)
]

const umlFunctions = [
    new UMLClassFunction('getAbout', 'Page<About>', () => navigate("/about", { replace: true })),
    new UMLClassFunction('getExperience', 'List<Experience>', () => navigate("/experiences", { replace: true })),
    new UMLClassFunction('getProjects', 'List<Project>', () => navigate("/projects", { replace: true }))
];
</script>

<Layout breadcrumbs={breadcrumbs}>
    <div class="ss-container flex-grow-1 d-flex justify-content-center">
        <UMLClass umlFunctions={umlFunctions}>
            <div slot="header">
                <img src="images/singletonsean.png" alt="Logo" height="75" width="75"/>
                <h1 class="mt-3">SingletonSean</h1>
            </div>
        </UMLClass>
    </div>
</Layout>