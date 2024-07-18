export interface PlayerType {
	id: string;
	name: string;
	scores: number[];
	color: ColorOptions;
	addScore: (score: number, index: number) => void;
	total: number;
}

export type ColorOptions = 'red' | 'gold' | 'green' | 'blue' | 'purple' | 'orange' | 'pink';
