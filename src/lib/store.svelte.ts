import type { ColorOptions, PlayerType, GameType } from './Types';

class GlobalStore<T> {
	value: T = $state()!;
	#initValue: T;

	constructor(_initValue: T) {
		this.value = _initValue;
		this.#initValue = _initValue;
	}

	reset() {
		this.value = this.#initValue;
	}
}

export class Game implements GameType {
	hasGameLoaded: boolean = $state(false);
	players: Player[] = $state([])!;
	currentHole: number = $state(0)!;
	completedHoles: number[] = $state([])!;
	totalHoles: number = 18;

	setCurrentHole(_holeNumber: number) {
		if (!this.hasGameLoaded) return;
		_holeNumber = Number(_holeNumber);
		this.currentHole = _holeNumber;
		this.saveGame();
	}

	rankPlayers(): Player[] {
		// order lowest to highest
		return [...this.players].sort((a, b) => a.getTotalScore() - b.getTotalScore());
	}

	resetGame() {
		this.players = [];
		this.currentHole = 0;
		this.completedHoles = [];
		localStorage.removeItem('players');
		localStorage.removeItem('currentHole');
		localStorage.removeItem('completedHoles');
	}

	saveGame() {
		// save the game to local storage
		const players = this.players.map((player) => player.generatePlayerObject());
		localStorage.setItem('players', JSON.stringify($state.snapshot(players)));
		localStorage.setItem('currentHole', this.currentHole.toString());
		localStorage.setItem('completedHoles', JSON.stringify(this.completedHoles));
	}

	loadGame() {
		// load the game from local storage
		const players = JSON.parse(localStorage.getItem('players') || '[]') as Array<{
			name: string;
			color: ColorOptions;
			scores: string;
			id: string;
		}>;

		const currentHole = localStorage.getItem('currentHole');
		const completedHoles = localStorage.getItem('completedHoles');
		console.log('players', players, currentHole, completedHoles);

		this.hasGameLoaded = true;

		if (players.length > 0 && currentHole && completedHoles) {
			console.log('players', players);

			this.players = players.map((player) => {
				// Type the player object from localStorage
				const loadedPlayer = player as {
					name: string;
					color: ColorOptions;
					scores: string;
					id: string;
				};
				const scores = JSON.parse(loadedPlayer.scores) as number[];

				return new Player(loadedPlayer.name, loadedPlayer.color, scores, loadedPlayer.id);
			});
			this.currentHole = Number(currentHole);
			this.completedHoles = JSON.parse(completedHoles);
			return true;
		} else {
			return false;
		}
	}
}

export class Player implements PlayerType {
	readonly id: string;
	name: string = $state()!;
	color: ColorOptions = $state()!;
	scores: number[] = $state()!;

	constructor(
		_name: string,
		_color: ColorOptions,
		_scores: number[] = Array(18).fill(0),
		_id: string = Math.random().toString(36).substr(2, 9)
	) {
		this.name = _name;
		this.color = _color;
		this.scores = _scores;
		this.id = _id;
	}

	getTotalScore() {
		return this.scores.reduce((a, b) => a + b, 0);
	}

	updateScore(_holeNumber: number, _score: number) {
		this.scores[_holeNumber - 1] = _score;
	}

	reloadPlayer(name: string, color: ColorOptions, scores: number[]) {
		this.name = name;
		this.color = color;
		this.scores = scores;
	}

	generatePlayerObject(): { id: string; name: string; color: ColorOptions; scores: string } {
		return {
			id: this.id,
			name: this.name,
			color: this.color,
			scores: JSON.stringify(this.scores)
		};
	}
}

export const game: GameType = new Game();
