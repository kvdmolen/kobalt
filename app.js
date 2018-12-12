import Kobalt from "./kobalt.js"
import Game from "./game.js"

var App = new Kobalt({
	name: "tictactoe",
	title: "Tic Tac Toe",
	state: {
		user: null
	},
	methods: {
		login: () => {},
		loadUser: () => {
			this.$api.get("api/user").then((response)=> {
				this.$state.set("user", response.data)
			})
		}
	},
	init: () => {
		this.loadUser()
	},
	elements: {
		game
	},
	routes: [
	{
		name: "home",
		path: "/",
		component: "game",
		children: [],
		meta: {
			permalink: "https://"
		}
	}],
	class: "bodyclass",
	children: [
	{
		element: "nav",
		class: "mainmenu",
		children: [
		{
			element: "img",
			class: "nav-img",
			src: "/img/logo.png"
		},
		{
			element: "ul",
			class: "nav-menu",
			children: [
			{
				element: "li",
				class: () => {return "none"}		
			}]
		}]
	},
	{
		element: "router"
	}]
})