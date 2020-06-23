<script>
  import Layout from '../components/layouts/Layout.svelte';
  import UMLClassComponent from '../components/uml/UMLClass.svelte';

  import Breadcrumb from '../models/breadcrumb';
  import UMLClass from '../models/uml-class';
  import UMLClassFunction from '../models/uml-class-function';

  const breadcrumbs = [new Breadcrumb('Home', '/', true)];

  const umlFunctions = [
    new UMLClassFunction('viewAbout', 'Page<About>', 'about'),
    new UMLClassFunction('getProjects', 'List<IProject>', 'projects'),
    new UMLClassFunction('getExperiences', 'List<IExperience>', 'experiences'),
  ];

  const umlClass = new UMLClass(
    'SingletonSean',
    umlFunctions,
    'singletonsean.png'
  );
</script>

<svelte:head>
  <title>Home - SingletonSean</title>
</svelte:head>

<Layout {breadcrumbs}>
  <div class="ss-container flex-grow-1 d-flex justify-content-center">
    <UMLClassComponent {umlClass} />
  </div>
</Layout>
