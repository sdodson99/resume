<script context="module">
  export async function preload({ params }) {
    const { experienceName } = params;

    const response = await this.fetch(`data/experiences.json`);

    const experiences = await response.json();

    return { experiences };
  }
</script>

<script>
  import UMLListingLayout from '../components/layouts/UMLListingLayout.svelte';
  import Breadcrumb from '../models/breadcrumb';
  import UMLClassFunction from '../models/uml-class-function';
  import UMLClass from '../models/uml-class';

  export let experiences;

  const breadcrumbs = [
    new Breadcrumb('Home', '/', false),
    new Breadcrumb('Experiences', 'experiences', true),
  ];

  function createViewExperienceFunction(route) {
    if (!route) {
      return new UMLClassFunction('viewExperience', 'Page<IExperience>');
    }

    return new UMLClassFunction(
      'viewExperience',
      'Page<IExperience>',
      `experiences/${route}`,
    );
  }

  const interfaceFunctions = [createViewExperienceFunction()];
  const umlInterface = new UMLClass(
    'IExperience',
    interfaceFunctions,
    'work.png',
  );

  const umlClasses = experiences.map(
    (e) =>
      new UMLClass(
        e.displayName,
        [createViewExperienceFunction(e.name)],
        e.imageUrl,
      ),
  );
</script>

<svelte:head>
  <title>Experiences - SingletonSean</title>
</svelte:head>

<UMLListingLayout {breadcrumbs} {umlInterface} {umlClasses} />
