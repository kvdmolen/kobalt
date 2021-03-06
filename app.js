import Kobalt from "./kobalt.js"
import Game from "./game.js"

import state from "./state.js"

{
	state,
	
}

{
	state: {
		views: {
			type: Array,
			resource: {
				method: "get",
				url: "/views?page=" + this.$state.page + "&sort=" & this.props.sort,
				response(data) {this.$commit("views", response.data.data)}
			},
			props: {
				sort: Number
			},
			add: {
				method: "get",
				url: "/views?page=" + this.$state.page,				
			}
		},
		page: {
			type: Number,
			default: 0,
			set:
		},
		user: Number
	}
}

comp

repeat: this.$state.views.data,
click(){
	// Add view
	this.$methods.viewAdd({name: inputvalue}, (data) => {
		this.$state.views.reload({sort: 1})
	})
)










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
