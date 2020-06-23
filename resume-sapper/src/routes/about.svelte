<script context="module">
  export async function preload() {
    const response = await this.fetch('data/skills.json');

    const skills = await response.json();

    return { skills };
  }
</script>

<script>
  export let skills;

  import Constants from '../constants';

  import PageLayout from '../components/layouts/PageLayout.svelte';
  import ListCard from '../components/content/ListCard.svelte';

  import Breadcrumb from '../models/breadcrumb';

  const breadcrumbs = [
    new Breadcrumb('Home', '/', false),
    new Breadcrumb('About', 'about', true),
  ];

  const youtubeLink = Constants.YOUTUBE_LINK;
  const githubLink = Constants.GITHUB_LINK;
</script>

<style>
  img.school {
    max-height: 100px;
  }
</style>

<svelte:head>
  <title>About - SingletonSean</title>
</svelte:head>

<PageLayout {breadcrumbs}>
  <h1 class="text-center">About</h1>

  <div class="mt-3">
    Hello! My name is
    <strong>Sean Dodson</strong>
    . I'm a software developer based outside of
    <strong>Baltimore, Maryland</strong>
    . I have a
    <strong>passion</strong>
    for taking on complex problems and genuinely have
    <strong>fun</strong>
    developing software. Currently, I am a
    <strong>student</strong>
    at Stevenson University and a
    <strong>C#/WPF</strong>
    software developer intern at
    <strong>Tricerat</strong>
    . Take a look at my skills and education below, and feel free to contact me
    below if you're interested in connecting!
  </div>

  <h2 class="mt-5 text-center text-sm-left">Skills</h2>
  <div class="mt-3 mt-sm-4 row no-gutters">
    {#each skills as skill}
      <div class="col-sm-4 d-flex">
        <div class="d-flex flex-grow-1 mx-1 my-3">
          <ListCard
            imageUri={skill.imageUri}
            title={skill.name}
            items={skill.subSkills} />
        </div>
      </div>
    {/each}
  </div>

  <p class="mx-1 mt-3">
    Visit
    <a rel="prefetch" class="link" href="/projects">projects</a>
    to see how I've used these skills to build software I'm passionate about.
    Visit my
    <a href={githubLink} target="_blank">GitHub</a>
    to see code I've written with these skills. Lastly, visit my
    <a href={youtubeLink} target="_blank">YouTube</a>
    to see how I use these skills to provide value to other software developers.
  </p>

  <h2 class="mt-5 text-center text-sm-left">Education</h2>
  <div class="mt-3 mt-sm-4 row no-gutters justify-content-between">
    <div class="d-flex justify-content-center col-sm-2">
      <img class="school" src="stevenson.jpg" alt="Stevenson Logo" />
    </div>
    <div class="mt-3 mt-sm-0 ml-sm-3 col">
      <div class="text-center text-sm-left">
        <h4 class="d-inline">Stevenson University</h4>
        <p class="font-italic d-md-inline ml-md-1">Owings Mills, Maryland</p>
      </div>
      <div class="mt-3 ml-sm-3">
        <div class="mt-3">
          <strong>Degree:</strong>
          Bachelor of Science, Computer Information Systems, Software Design
          Track
        </div>
        <div class="mt-3">
          <strong>Expected Graduation Date:</strong>
          December 2020
        </div>
        <div class="mt-3">
          <strong>GPA:</strong>
          4.0
        </div>
      </div>
    </div>
  </div>

  <h2 class="mt-5 text-center text-sm-left">Contact</h2>
  <div class="mx-1 mt-3 mt-sm-4">
    Have a question or want to connect? Send me an email at
    <a href="mailto:sc.dodson4@gmail.com">sc.dodson4@gmail.com</a>
    .
  </div>
</PageLayout>