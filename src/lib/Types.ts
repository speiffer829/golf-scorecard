export interface PlayerType {
	id: string;
	name: string;
	color: ColorOptions;
	scores: number[];
	getTotalScore: () => number;
	updateScore: (holeNumber: number, score: number) => void;
	reloadPlayer: (name: string, color: ColorOptions, scores: number[]) => void;
	generatePlayerObject: () => { id: string; name: string; color: ColorOptions; scores: string };
}

export interface GameType {
	players: PlayerType[];
	currentHole: number;
	completedHoles: number[];
	setCurrentHole: (holeNumber: number | string) => void;
	rankPlayers: () => PlayerType[];
	totalHoles: number;
	saveGame: () => void;
	loadGame: () => boolean;
	resetGame: () => void;
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
