import type { ColorOptions, PlayerType, GameType, HoleType } from './Types';

class GlobalStore {
	value = $state();
	#initValue;

	constructor(_initValue) {
		this.value = _initValue;
		this.#initValue = _initValue;
	}

	reset() {
		this.value = this.#initValue;
	}
}

export class Game implements GameType {
	players: Player[] = $state([]);
	currentHole: number = $state(0);
	completedHoles: number[] = $state([]);
	totalHoles: number = 9;

	setCurrentHole(_holeNumber: number) {
		_holeNumber = Number(_holeNumber);
		this.currentHole = _holeNumber;
	}

	rankPlayers(): Player[] {
		// order lowest to highest
		return [...this.players].sort((a, b) => a.getTotalScore() - b.getTotalScore());
	}
}

export class Player implements PlayerType {
	readonly id: string;
	name: string = $state();
	color: ColorOptions = $state();
	scores: number[] = $state([0, 0, 0, 0, 0, 0, 0, 0, 0]);

	constructor(_name: string, _color: string) {
		this.name = _name;
		this.color = _color;
		this.id = Math.random().toString(36).substr(2, 9);
	}

	getTotalScore() {
		return this.scores.reduce((a, b) => a + b, 0);
	}

	updateScore(_holeNumber: number, _score: number) {
		this.scores[_holeNumber] = _score;
	}
}

export const game: GameType = new Game();
