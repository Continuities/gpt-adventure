export type Action =
	| {
			verb: 'move';
			direction: 'north' | 'south' | 'east' | 'west' | 'up' | 'down';
	  }
	| {
			verb: 'take';
			object: string;
	  }
	| {
			very: 'use';
			subject: string;
			object: string;
	  };
