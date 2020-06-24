<script context="module">
  export async function preload() {
    const skillsResponse = await this.fetch('data/skills.json');

    const skills = await skillsResponse.json();

    const backgroundInformationResponse = await this.fetch(
      'data/background-information.json'
    );

    const backgroundInformation = await backgroundInformationResponse.json();

    return { skills, backgroundInformation };
  }
</script>

<script>
  import moment from 'moment';
  import Constants from '../constants';
  import PageLayout from '../components/layouts/PageLayout.svelte';
  import ListCard from '../components/content/ListCard.svelte';
  import Breadcrumb from '../models/breadcrumb';

  export let skills;
  export let backgroundInformation;

  skills.sort((s1, s2) => s1.order > s2.order);

  const { description, education, email } = backgroundInformation;
  const graduationDate = moment(education.graduation_date).format('MMMM YYYY');
  const gpa = education.gpa.toFixed(1);

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
    {@html description}
  </div>

  <h2 class="mt-5 text-center text-sm-left">Skills</h2>
  <div class="mt-3 mt-sm-4 row no-gutters ">
    {#each skills as skill}
      <div class="col-sm-6 d-flex justify-content-center">
        <div class="d-flex flex-grow-1 mx-1 my-3">
          <ListCard
            imageUri={skill.imageUrl}
            title={skill.displayName}
            items={skill.sub_skills.map((s) => s.displayName)} />
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
      <img
        class="school"
        src={education.imageUrl}
        alt="{education.displayName} Logo" />
    </div>
    <div class="mt-3 mt-sm-0 ml-sm-3 col">
      <div class="text-center text-sm-left">
        <h4 class="d-inline">{education.displayName}</h4>
        <p class="font-italic d-md-inline ml-md-1">{education.location}</p>
      </div>
      <div class="mt-3 ml-sm-3">
        <div class="mt-3">
          <strong>Degree:</strong>
          {education.degree}
        </div>
        <div class="mt-3">
          <strong>Expected Graduation Date:</strong>
          {graduationDate}
        </div>
        <div class="mt-3">
          <strong>GPA:</strong>
          {gpa}
        </div>
      </div>
    </div>
  </div>

  <h2 class="mt-5 text-center text-sm-left">Contact</h2>
  <div class="mx-1 mt-3 mt-sm-4">
    Have a question or want to connect? Send me an email at
    <a href="mailto:{email}">{email}</a>
    .
  </div>
</PageLayout>
