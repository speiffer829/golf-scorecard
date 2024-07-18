import type { ColorOptions, PlayerType } from './Types';

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

export class Player implements PlayerType {
	name: string = $state();
	color: ColorOptions = $state();
	scores: number[] = $state([]);
	readonly id: string;

	constructor(_name: string, _color: string) {
		this.name = _name;
		this.color = _color;
		this.id = Math.random().toString(36).substr(2, 9);
	}

	addScore(score: number, index: number) {
		this.scores[index] = score;
	}

	get total(): number {
		return this.scores.reduce((acc, cur) => acc + cur, 0);
	}
}

export const players: Array = new GlobalStore([]);
