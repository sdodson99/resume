<script>
    import PageLayout from '../../components/layouts/PageLayout.svelte'

    import Breadcrumb from '../../models/breadcrumb.js'

    const breadcrumbs = [
        new Breadcrumb('Home', '/', false),
        new Breadcrumb('Experiences', 'experiences', false),
        new Breadcrumb('Tricerat', 'experiences/tricerat', true)
    ];

    const organizationSite = "https://www.tricerat.com/";

    const tasks = [
        "Develop C# WPF applications with MVVM architecture",
        "Implement desktop wireframe designs in WPF using XAML to enhance user experience",
        "Setup virtual machines to test applications in multiple environments",
        "Rapidly solve customer cases to increase customer satisfaction"
    ];
</script>

<svelte:head>
    <title>Tricerat - SingletonSean</title>
</svelte:head>

<PageLayout breadcrumbs={breadcrumbs}>
    <div class="text-center">
        <img class="logo" src="tricerat.jpeg" alt="Tricerat Logo"/>
    </div>
    <h1 class="mt-3 text-center">Tricerat</h1>

    <div class="mt-3 row no-gutters justify-content-center">
        <p class="col-sm text-center">Software Developer Intern</p>
        <p class="mx-1 d-none d-sm-block">|</p>
        <p class="col-sm text-center">February 2019 - Present</p>
        <div class="w-100"></div>
        <p class="col-sm text-center">Owings Mills, MD</p>
        <p class="mx-1 d-none d-sm-block">|</p>
        <p class="col-sm text-center"><a href={organizationSite} target="_blank">Organization Site</a></p>
    </div>

    <div class="mt-3">
        Tricerat develops <strong>software</strong> to solve organizations' <strong>printing</strong> demands. I am currently a Tricerat 
        <strong>software developer intern</strong>. I primarily develop <strong>C# WPF (MVVM)</strong> desktop applications that perform <strong>CRUD</strong> 
        operations on databases, files, and registry keys.
    </div>

    <h2 class="mt-5 text-center text-sm-left">Tasks</h2>
    <div class="mt-3">
        <ul class="list-group mx-1">
            {#each tasks as task}
                <li class="list-group-item">{ task }</li>
            {/each}
        </ul>
    </div>

</PageLayout>

<style>
.logo{
    max-height: 75px;
}
</style>