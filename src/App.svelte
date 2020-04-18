<script>
	import { Router, Link, Route } from "svelte-routing";

	import Home from './pages/Home.svelte'
	import About from './pages/About.svelte'
	import Experiences from './pages/Experiences.svelte'
	import Tricerat from './pages/experiences/Tricerat.svelte';
	import ByteLion from './pages/experiences/ByteLion.svelte';
	import Projects from './pages/Projects.svelte'
	import ShowNTell from './pages/projects/ShowNTell.svelte'
</script>

<Router>
	<Route path="/" component="{Home}"/>
	<Route path="about" component="{About}"/>
	<Route path="experiences" component="{Experiences}"/>
	<Route path="experiences/tricerat" component="{Tricerat}"/>
	<Route path="experiences/bytelion" component="{ByteLion}"/>
	<Route path="projects" component="{Projects}"/>
	<Route path="projects/show-n-tell" component="{ShowNTell}"/>
</Router>

<style>
:global(:root){
	--color-grayscale-dark: rgb(131, 130, 130);
	--color-grayscale-medium: rgb(156, 156, 156);
	--color-grayscale-light: rgb(231, 231, 231);
}
</style>