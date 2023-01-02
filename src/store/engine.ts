import { writable } from 'svelte/store';
import type { Page } from '$lib/model/page';
import type { Action } from '$lib/model/action';

const LoadingPage: Page = {
	heading: 'Loading',
	content: 'loading...'
};

const Engine = () => {
	const { subscribe, set } = writable<Page>(LoadingPage);

	const dispatch = async (action: Action) => {
		const response = await fetch('/action', {
			method: 'POST',
			body: JSON.stringify(action)
		});
		const { content } = await response.json();
		set({
			heading: 'Updated',
			content
		});
	};

	return { subscribe, dispatch };
};

export default Engine();
