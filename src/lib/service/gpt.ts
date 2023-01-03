import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';
import { GENERATION_MODEL, GENERATION_TEMPERATURE, GENERATION_MAX_TOKENS } from '$lib/constants';
import type { Input } from '$lib/model/generation';

const configuration = new Configuration({
	apiKey: OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const objectFragment = (objects: Array<string>) => {
	if ((objects?.length ?? 0) === 0) {
		return '';
	}
	if (objects.length === 1) {
		return ` where there is ${objects[0]}`;
	}
	return ` where there is ${objects.slice(0, -1).join(', ')}, and ${objects.slice(-1)}`;
};

const inputToPrompt = ({ action, room, objects }: Input): string => {
	const actionString = action ? `${action} in ` : '';
	const objectString = objectFragment(objects);
	return `Describe me ${actionString}a ${room}${objectString}.`;
};

export const generate = async (input: Input): Promise<string> => {
	const response = await openai.createCompletion({
		model: GENERATION_MODEL,
		prompt: inputToPrompt(input),
		temperature: GENERATION_TEMPERATURE,
		max_tokens: GENERATION_MAX_TOKENS
	});
	return response.data.choices[0].text;
};
