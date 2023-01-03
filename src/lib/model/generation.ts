export type Model = 'text-davinci-003' | 'text-curie-001' | 'text-babbage-001' | 'text-ada-001';
export type Temperature = number;

export type Input = {
	room: string;
	objects: Array<string>;
	action: string;
};
