export function drawerHashLinkSupport({ onClose }: drawerHashLinkSupport.Params) {
	onClose() // Close the drawer
	// Scroll to the hash link after a short delay to allow the drawer to close
	setTimeout(() => {
		const hash = window.location.hash
		const target = document.querySelector(hash)
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' })
		}
	}, 300) // Adjust the delay as needed

	// Return false to prevent default link behavior
	return false
}

export namespace drawerHashLinkSupport {
	export interface Params {
		onClose: () => void
	}
}
