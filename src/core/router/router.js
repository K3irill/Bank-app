import { ROUTES } from './routes.data'
import { NotFound } from '@/components/screens/not-found/not-found.component'

export class Router {
	#routes
	#currentRout
	constructor() {
		this.#routes = ROUTES
		this.#currentRout = null

		this.#handleRouteChange()
	}
	getCurrentPath() {
		return window.location.pathname
	}

	#handleRouteChange() {
		const path = this.getCurrentPath() || '/'
		let route = this.#routes.find(route => route.path === path)
		if (!route) {
			route = {
				component: NotFound
			}
		}
		this.#currentRout = route
		this.render()
	}
	render() {
		const component = new this.#currentRout.component()
		document.getElementById('app').innerHTML = component.render()
	}
}
