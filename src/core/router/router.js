import { Layout } from '@/components/layout/layout.component'
import { ROUTES } from './routes.data'
import { NotFound } from '@/components/screens/not-found/not-found.component'

export class Router {
	#routes = ROUTES
	#currentRout = null
	#layout = null
	constructor() {
		this.#handleRouteChange()
		this.#handleLinks
	}
	#handleLinks() {
		document.addEventListener(event => {
			const target = event.target.closest('a')

			if (target) {
				event.preventDefault()
				this.navigate(target.href)
			}
		})
	}
	getCurrentPath() {
		return window.location.pathname
	}
	navigate(path) {
		if (path !== this.getCurrentPath()) {
			window.history.pushState({}, '', path)
			this.#handleRouteChange()
		}
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
