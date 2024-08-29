import App from './App.svelte';
// import { SvelteComponent, ComponentConstructorOptions } from 'svelte';

// declare module './App.svelte' {
// 	class Component extends SvelteComponent {
		
// 	}
// 	export default Component;
// }

const app = new App({
	target: document.body,
	props: {
		name: 'skibidi'
	}
});

export default app;