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

<style>
:global(:root){
	--color-grayscale-dark: rgb(131, 130, 130);
	--color-grayscale-medium: rgb(156, 156, 156);
	--color-grayscale-light: rgb(231, 231, 231);
}
</style>