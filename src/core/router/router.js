import { Layout } from '@/components/layout/layout.component'
import { ROUTES } from './routes.data'
import { NotFound } from '@/components/screens/not-found/not-found.component'

export class Router {
	#routes = ROUTES
	#currentRout = null
	#layout = null
	constructor() {

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
		this.#render()
	}
	#render() {
		const component = new this.#currentRout.component()
		if (!this.#layout) {
			this.#layout = new Layout({
				router: this,
				children: component.render()
			})
			document.getElementById('app').innerHTML = this.#layout.render()
		} else {
			document.querySelector('main').innerHTML = component.render()
		}
	}
}
