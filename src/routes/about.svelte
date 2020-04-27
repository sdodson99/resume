<script>
    import { goto } from '@sapper/app';

    import Constants from '../services/constants'

    import Layout from '../components/layouts/Layout.svelte'

    import Breadcrumb from '../models/breadcrumb.js'
    import Skill from '../models/skill.js'

    const breadcrumbs = [
        new Breadcrumb('Home', '/', false),
        new Breadcrumb('About', 'about', true)
    ];

    const skills = [
        new Skill('.NET Core', 'dotnetcore.png', [
            new Skill('ASP.NET (WebAPI)'),
            new Skill('WPF (MVVM)'),
            new Skill('Entity Framework'),
            new Skill('NUnit + Moq')
        ]),
        new Skill('JavaScript', 'javascript.png',[
            new Skill('MERN Stack'),
            new Skill('Vue.js (Vuex)'),
            new Skill('Svelte (Sapper)'),
        ]),
        new Skill('Azure', 'azure.png', [
            new Skill('Functions'),
            new Skill('Container Instances'),
            new Skill('Storage Accounts'),
            new Skill('SQL Databases'),
            new Skill('CosmosDB'),
            new Skill('DevOps (CI/CD)')
        ])
    ];

	const youtubeLink = Constants.YOUTUBE_LINK;
	const githubLink = Constants.GITHUB_LINK;

</script>

<svelte:head>
    <title>About - SingletonSean</title>
</svelte:head>

<Layout breadcrumbs={breadcrumbs}>
    <div class="ss-page-container">
        <h1 class="text-center">About</h1>

        <div class="mt-3">Hello! My name is <strong>Sean Dodson</strong>. I'm a software developer based outside of 
        <strong>Baltimore, Maryland</strong>. I have a <strong>passion</strong> for taking on complex problems and genuinely have <strong>fun</strong> developing software.
        Currently, I am a <strong>student</strong> at Stevenson University and a <strong>C#/WPF</strong> software developer intern at <strong>Tricerat</strong>.
        Take a look at my skills and education below, and feel free to contact me below if you're interested in connecting!</div>

        <h2 class="mt-5 text-center text-sm-left">Skills</h2>
        <div class="mt-3 mt-sm-4 row no-gutters justify-content-between">
            {#each skills as skill}
                <div class="card mx-1 my-3 col-sm">
                    <div class="card-body d-flex flex-grow-0 flex-column align-items-center">
                        <img class="skill" src={ skill.imageUri } alt={ skill.name }/>
                        <h4 class="card-title mt-3 text-center">{ skill.name }</h4>
                    </div>
                    <ul class="list-group list-group-flush">
                        {#each skill.subSkills as subSkill}
                            <li class="list-group-item">{ subSkill.name }</li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
        <p class="mx-1 mt-3">Visit <span class="link" on:click={() => goto('/projects')}>projects</span> to see how I've used these skills 
        to build software I'm passionate about. Visit my <a href="{ githubLink }">GitHub</a> to see code I've written with these skills.
        Lastly, visit my <a href="{ youtubeLink }">YouTube</a> to see how I use these skills to provide value to other software developers.

        <h2 class="mt-5 text-center text-sm-left">Education</h2>
        <div class="mt-3 mt-sm-4 row no-gutters justify-content-between">
            <div class="d-flex justify-content-center col-sm-2">
                <img class="school" src="stevenson.jpg" alt="Stevenson Logo"/>
            </div>
            <div class="mt-3 ml-3 mt-sm-0 col">
                <h4 class="text-center text-sm-left">Stevenson University - Owings Mills, Maryland</h4>
                <div class="mt-3 ml-1">
                    <div class="mt-3"><strong>Degree:</strong> Bachelor of Science, Computer Information Systems, Software Design Track</div>
                    <div class="mt-3"><strong>Expected Graduation Date:</strong> December 2020</div>
                    <div class="mt-3"><strong>GPA:</strong> 4.0</div>
                </div>
            </div>
        </div>

        <h2 class="mt-5 text-center text-sm-left">Contact</h2>
        <div class="mx-1 mt-3 mt-sm-4">
            Have a question or want to connect? Send me an email at <a href="mailto:sc.dodson4@gmail.com">sc.dodson4@gmail.com</a>.
        </div>
    </div>
</Layout>

<style>

.ss-page-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    padding-left: 1.5em;
    padding-right: 1.5em;
}

img.skill {
    max-width: 100%;
    max-height: 200px;
}

img.school {
    max-height: 100px;
}

</style>