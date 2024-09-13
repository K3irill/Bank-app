export class Layout {
	constructor({ router, children }) {
		this.router = router
		this.children = children
	}
	render() {
		const headerHTML = '<header>header</header>'

		return `
    ${headerHTML}
    <main>
    ${this.children}
    </main>`
	}
}
