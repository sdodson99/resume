<script>
    import PageLayout from '../../components/layouts/PageLayout.svelte'

    import Breadcrumb from '../../models/breadcrumb.js'

    const breadcrumbs = [
        new Breadcrumb('Home', '/', false),
        new Breadcrumb('Experiences', 'experiences', false),
        new Breadcrumb('LawIQ', 'experiences/lawiq', true)
    ];

    const organizationSite = "https://www.lawiq.com/";

    const tasks = [
        "Experienced operating in an Agile (Scrum) environment",
        "Helped organize Scrum sprints with Jira",
        "Conducted research to keep team updated on status of potential and current customers"
    ];

</script>

<svelte:head>
    <title>LawIQ - SingletonSean</title>
</svelte:head>

<PageLayout breadcrumbs={breadcrumbs}>
    <div class="text-center">
        <img class="logo" src="lawiq.png" alt="LawIQ Logo"/>
    </div>
    <h1 class="mt-3 text-center">LawIQ</h1>

    <div class="mt-3 row no-gutters">
        <p class="col-sm text-center">Intern</p>
        <p class="mx-1 d-none d-sm-block">|</p>
        <p class="col-sm text-center">January 2018</p>
        <p class="mx-1 d-none d-sm-block">|</p>
        <p class="col-sm text-center">Hampstead, MD</p>
        <p class="mx-1 d-none d-sm-block">|</p>
        <p class="col-sm text-center"><a href={organizationSite} target="_blank">Organization Site</a></p>
    </div>

    <div class="mt-3">
        LawIQ develops <strong>software</strong> to manage data for organizations in the <strong>energy industry</strong>. I was a LawIQ 
        <strong>intern</strong> between my Fall and Spring semester's in 2018.
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