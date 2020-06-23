<script>
  import UMLListingLayout from '../components/layouts/UMLListingLayout.svelte';

  import Breadcrumb from '../models/breadcrumb';
  import UMLClassFunction from '../models/uml-class-function';
  import UMLClass from '../models/uml-class';

  const breadcrumbs = [
    new Breadcrumb('Home', '/', false),
    new Breadcrumb('Experiences', 'experiences', true),
  ];

  function createViewExperienceFunction(onClick) {
    return new UMLClassFunction('viewExperience', 'Page<IExperience>', onClick);
  }

  const interfaceFunctions = [createViewExperienceFunction()];

  const triceratFunctions = [
    createViewExperienceFunction('experiences/tricerat'),
  ];

  const lawiqFunctions = [createViewExperienceFunction('experiences/lawiq')];

  const umlInterface = new UMLClass(
    'IExperience',
    interfaceFunctions,
    'work.png'
  );

  const umlClasses = [
    new UMLClass('Tricerat', triceratFunctions, 'tricerat.jpeg'),
    new UMLClass('LawIQ', lawiqFunctions, 'lawiq.png'),
  ];
</script>

<svelte:head>
  <title>Experiences - SingletonSean</title>
</svelte:head>

<UMLListingLayout {breadcrumbs} {umlInterface} {umlClasses} />
