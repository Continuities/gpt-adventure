import type { Action } from '$lib/model/action';
import { error, json } from '@sveltejs/kit';
import { generate } from '$lib/service/gpt';

export const POST: import('./$types').RequestHandler = async ({ request }) => {
	const action: Action = await request.json();
	console.log('Received action', action);
	// TODO: Use the action to update the game model
	// TODO: Convert the game model into GPT-3 input
	try {
		const content = await generate();
		return json({
			content
		});
	} catch (e) {
		throw error(500, e);
	}
};
