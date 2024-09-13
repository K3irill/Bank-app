export class RQuery {
	constructor(selector) {
		if (typeof selector === 'string') {
			this.elements = document.querySelectorAll(selector)

			if (!this.elements) {
				throw new Error(`Element ${selector} not found!`)
			}
		} else if (selector instanceof HTMLElement) {
			this.element = selector
		} else {
			throw new Error(`Invalid selector type`)
		}
	}

	find(selector) {
		const element = new RQuery(this.element.querySelector(selector))
		if (element) {
			return element
		} else {
			throw new Error(`Element ${selector} not found!`)
		}
	}

	/**
	 * @param {string} property
	 * @param {string} value
	 * @returns {RQuery}
	 */
	css(property, value) {
		if (typeof property !== 'string' || typeof value !== 'string') {
			throw new Error('property and value must be strings')
		}
		this.element.style[property] = value
		return this
	}
	append(selector) {
		document.body.appendChild(selector)
		if (selector) {
			return document.body.appendChild(selector)
		} else {
			throw new Error(`Element ${selector} not found!`)
		}
	}
}

/**
 *
 * @param {string} selector
 * @returns {RQuery}
 */

export function $R(selector) {
	return new RQuery(selector)
}
