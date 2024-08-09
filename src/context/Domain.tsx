/** @format */

export type PokemonResult = {
	count: number;
	next: string;
	previous: string;
	results: Pokemon[];
};
export type Pokemon = {
	name: string;
	url: string;
};
export type PokemonDetail = {
	abilities: Ability[];
	sprites: Sprite;
};
export type Ability = {
	ability: AbilityNameAndUrl;
	is_hidden: boolean;
	slot: number;
};

export type AbilityNameAndUrl = {
	name: string;
	url: string;
};

export type Sprite = {
	front_default: string;
};
