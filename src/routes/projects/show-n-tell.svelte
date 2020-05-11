<script>
    import PageLayout from '../../components/layouts/PageLayout.svelte'
	import ListCard from './../../components/content/ListCard.svelte';

    import Constants from '../../services/constants.js'
    import Breadcrumb from '../../models/breadcrumb.js'

    const breadcrumbs = [
        new Breadcrumb('Home', '/', false),
        new Breadcrumb('Projects', 'projects', false),
        new Breadcrumb("Show 'N Tell", 'projects/show-n-tell', true)
    ];

    const projectSite = "http://snt.seandodson.com";
    const codeRepository = `${Constants.GITHUB_LINK}/show-n-tell`;
    const demoVideo = "https://youtu.be/FHNkPVIfIvw";

    const technologies = [{
        imageUri: 'dotnetcore.png',
        name: "ASP.NET Core",
        items: [
            'Entity Framework Core w/ SQL Server',
            'SignalR',
            'MediatR',
            'Swagger UI',
            'Unit Testing w/ NUnit & Moq'
        ]
    },
    {
        imageUri: 'vuejs.png',
        name: "Vue.js Client",
        items: [
            'Vuex',
            'Vue Router',
            'SignalR',
            'Bootstrap'
        ]
    },
    {
        imageUri: 'azure.png',
        name: "Deployment",
        items: [
            'Azure Container Instances',
            'Azure SQL Database',
            'Azure Blob Storage',
            'Application Insights Logging',
            'Azure Key Vault',
            'Azure Event Grid & Functions',
            'GitHub Actions CI/CD'
        ]
    }];

    const features = [
        "Explore random image posts created by other users",
        "Upload images with descriptions to share with other users",
        "Like and comment on other user's image posts",
        "Explore and follow other user's profiles",
        "View a feed of image posts created by followed user profiles",
        "Observe real-time updates",
        "Search for image posts",
        "Add tags to uploaded image posts to increase search rank"
    ];
</script>

<svelte:head>
    <title>Show 'N Tell - SingletonSean</title>
</svelte:head>

<PageLayout breadcrumbs={breadcrumbs}>
    <div class="text-center">
        <img class="logo" src="showntell.png" alt="Show 'N Tell Logo"/>
    </div>
    <h1 class="mt-3 text-center">Show 'N Tell</h1>
    
    <div class="mt-3 row no-gutters">
        <p class="col-sm text-center"><a href={projectSite} target="_blank">Project Site</a></p>
        <p class="mx-1 d-none d-sm-block">|</p>
        <p class="col-sm text-center"><a href={codeRepository} target="_blank">Code</a></p>
        <p class="mx-1 d-none d-sm-block">|</p>
        <p class="col-sm text-center"><a href={demoVideo} target="_blank">Demo Video</a></p>
    </div>

    <div class="mt-3">
        Show ‘N Tell is a social media platform for users to upload and 
        discover images of other user’s sentimental, valuable, or random items.
    </div>

    <h2 class="mt-5 text-center text-sm-left">Features</h2>
    <div class="mt-3">
        <ul class="list-group mx-1">
            {#each features as feature}
                <li class="list-group-item">{ feature }</li>
            {/each}
        </ul>
    </div>

    <h2 class="mt-5 text-center text-sm-left">Technology</h2>
    <div class="mt-3 row no-gutters">
        {#each technologies as technology}
            <div class="col-sm-6 d-flex">
                <div class="d-flex flex-grow-1 my-3 mx-1">
                    <ListCard imageUri= {technology.imageUri}
                        title={technology.name}
                        items={technology.items}/>
                </div>
            </div>
        {/each}
    </div>
</PageLayout>

<style>
.logo{
    max-height: 75px;
}
</style>