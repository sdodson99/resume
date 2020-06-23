<script context="module">
  export async function preload() {
    const response = await this.fetch('projects.json');

    const projects = await response.json();

    console.log(projects);
    

    return { projects };
  }
</script>

<script>
  import UMLListingLayout from '../components/layouts/UMLListingLayout.svelte';

  import Breadcrumb from '../models/breadcrumb';
  import UMLClass from '../models/uml-class';

  import UMLClassFunction from '../models/uml-class-function';

  export let projects;

  const breadcrumbs = [
    new Breadcrumb('Home', '/', false),
    new Breadcrumb('Projects', 'projects', true),
  ];

  function createViewProjectFunction(route) {
    return new UMLClassFunction(
      'viewProject',
      'Page<IProject>',
      `projects/${route}`
    );
  }

  const umlInterface = new UMLClass(
    'IProject',
    [createViewProjectFunction()],
    'lightbulb.png'
  );

  const umlClasses = projects.map(
    (p) =>
      new UMLClass(
        p.displayName,
        [createViewProjectFunction(p.name)],
        p.imageUri
      )
  );
</script>

<svelte:head>
  <title>Projects - SingletonSean</title>
</svelte:head>

<UMLListingLayout {breadcrumbs} {umlInterface} {umlClasses} />
