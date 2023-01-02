import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';
import { GENERATION_MODEL, GENERATION_TEMPERATURE, GENERATION_MAX_TOKENS } from '$lib/constants';

const configuration = new Configuration({
	apiKey: OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export const generate = async (): Promise<string> => {
	const response = await openai.createCompletion({
		model: GENERATION_MODEL,
		prompt: 'Say this is a test',
		temperature: GENERATION_TEMPERATURE,
		max_tokens: GENERATION_MAX_TOKENS
	});
	return response.data.choices[0].text;
};
