<script>
	import { Router, Link, Route } from "svelte-routing";

	import Home from './pages/Home.svelte'
	import About from './pages/About.svelte'
	import Experiences from './pages/Experiences.svelte'
	import Projects from './pages/Projects.svelte'
</script>

<Router>
	<Route path="/" component="{Home}"/>
	<Route path="about" component="{About}"/>
	<Route path="experiences" component="{Experiences}"/>
	<Route path="projects" component="{Projects}"/>
</Router>