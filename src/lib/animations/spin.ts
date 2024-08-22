export function spin(node, { delay = 0, duration = 300 } = {}) {
	return {
		duration,
		delay,
		css: (t) => `
		rotate: ${t * 360}deg;
		scale: ${t};
		opacity: ${t}`
	};
}
