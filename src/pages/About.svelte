<script>
    import Layout from '../components/layouts/Layout.svelte'

    import Breadcrumb from '../models/breadcrumb.js'

    const breadcrumbs = [
        new Breadcrumb('Home', '/', false),
        new Breadcrumb('About', 'about', true)
    ];

</script>

<Layout breadcrumbs={breadcrumbs}>
    <div class="ss-page-container">
        <h1 class="text-center">About</h1>

        <div class="mt-3 text-center">Hello! My name is Sean Dodson.</div>

        <h2 class="mt-5 text-center text-sm-left">Education</h2>
        <div class="mt-5 row no-gutters justify-content-between">
            <div class="d-flex justify-content-center col-sm-2">
                <img src="/images/stevenson.jpg" alt="Stevenson Logo"/>
            </div>
            <div class="m-3 mt-sm-0 col">
                <p class="text-center text-sm-left"><span class="font-weight-bold">Stevenson University</span> - Owings Mills, Maryland</p>
                <div class="ml-0 ml-sm-3">
                    <p>Degree: Bachelor of Science, Computer Information Systems, Software Design Track</p>
                    <p>Expected Graduation Date: December 2020</p>
                    <p>GPA: 4.0</p>
                </div>
            </div>
        </div>
    </div>
</Layout>

<style>

.ss-page-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    padding-left: 1.5em;
    padding-right: 1.5em;
}

img {
    max-height: 100px;
}

</style>