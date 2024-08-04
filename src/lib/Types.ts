export interface PlayerType {
	id: string;
	name: string;
	color: ColorOptions;
	scores: number[];
	getTotalScore: () => number;
	updateScore: (holeNumber: number, score: number) => void;
}

export interface GameType {
	players: PlayerType[];
	currentHole: number;
	completedHoles: number[];
	setCurrentHole: (holeNumber: number | string) => void;
	totalHoles: number;
}

export type ColorOptions =
	| 'red'
	| 'gold'
	| 'green'
	| 'blue'
	| 'purple'
	| 'orange'
	| 'pink'
	| 'white'
	| 'black';
