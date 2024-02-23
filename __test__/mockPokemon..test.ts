import { IPokemonResponse } from '@/app/graphql/pokemon/pokemon'

export const BulbasaurResponse: IPokemonResponse = {
    pokemon: {
        id: 'UG9rZW1vbjowMDE=',
        name: 'Bulbasaur',
        number: '001',
        classification: 'Seed Pokémon',
        types: [
            'Grass',
            'Poison'
        ],
        resistant: [
            'Water',
            'Electric',
            'Grass',
            'Fighting',
            'Fairy'
        ],
        weight: {
            minimum: '6.04kg',
            maximum: '7.76kg'
        },
        height: {
            minimum: ' 0.61m',
            maximum: '0.79m'
        },
        weaknesses: [
            'Fire',
            'Ice',
            'Flying',
            'Psychic'
        ],
        fleeRate: 0.1,
        maxCP: 951,
        maxHP: 1071,
        image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
        attacks: {
            fast: [
                {
                    name: 'Tackle',
                    type: 'Normal',
                    damage: 12
                },
                {
                    name: 'Vine Whip',
                    type: 'Grass',
                    damage: 7
                }
            ],
            special: [
                {
                    name: 'Power Whip',
                    type: 'Grass',
                    damage: 70
                },
                {
                    name: 'Seed Bomb',
                    type: 'Grass',
                    damage: 40
                },
                {
                    name: 'Sludge Bomb',
                    type: 'Poison',
                    damage: 55
                }
            ]
        },
        evolutions: [
            {
                name: 'Ivysaur',
                image: 'https://img.pokemondb.net/artwork/ivysaur.jpg'
            },
            {
                name: 'Venusaur',
                image: 'https://img.pokemondb.net/artwork/venusaur.jpg'
            }
        ]
    }
}

export const squirtleResponse: IPokemonResponse = {
    pokemon: {
        id: 'UG9rZW1vbjowMDc=',
        name: 'Squirtle',
        number: '007',
        weight: {
            minimum: '7.88kg',
            maximum: '10.13kg'
        },
        height: {
            minimum: '0.44m',
            maximum: '0.56m'
        },
        classification: 'Tiny Turtle Pokémon',
        types: [
            'Water'
        ],
        resistant: [
            ' Fire',
            'Water',
            ' Ice',
            'Steel'
        ],
        weaknesses: [
            ' Electric',
            ' Grass'
        ],
        fleeRate: 0.1,
        maxCP: 891,
        maxHP: 1008,
        image: 'https://img.pokemondb.net/artwork/squirtle.jpg',
        attacks: {
            fast: [
                {
                    name: 'Bubble',
                    type: 'Water',
                    damage: 25
                },
                {
                    name: 'Tackle',
                    type: 'Normal',
                    damage: 12
                }
            ],
            special: [
                {
                    name: 'Aqua Jet',
                    type: 'Water',
                    damage: 25
                },
                {
                    name: 'Aqua Tail',
                    type: 'Water',
                    damage: 35
                },
                {
                    name: ' Water Pulse',
                    type: 'Water',
                    damage: 45
                }
            ]
        },
        evolutions: [
            {
                name: 'Wartortle',
                image: 'https://img.pokemondb.net/artwork/wartortle.jpg'
            },
            {
                name: 'Blastoise',
                image: 'https://img.pokemondb.net/artwork/blastoise.jpg'
            }
        ]
    }
}

export const charmanderResponse: IPokemonResponse = {
    pokemon: {
        id: 'UG9rZW1vbjowMDQ=',
        name: 'Charmander',
        number: '004',
        classification: 'Lizard Pokémon',
        types: [
            'Fire'
        ],
        resistant: [
            'Fire',
            'Grass',
            'Ice',
            'Bug',
            'Steel',
            'Fairy'
        ],
        weight: {
            minimum: '7.44kg',
            maximum: '9.56kg'
        },
        height: {
            minimum: '0.53m',
            maximum: '0.68m'
        },
        weaknesses: [
            'Water',
            'Ground',
            'Rock'
        ],
        fleeRate: 0.1,
        maxCP: 841,
        maxHP: 955,
        image: 'https://img.pokemondb.net/artwork/Charmander.jpg',
        attacks: {
            fast: [
                {
                    name: 'Ember',
                    type: 'Fire',
                    damage: 10
                },
                {
                    name: 'Scratch',
                    type: 'Normal',
                    damage: 6
                }
            ],
            special: [
                {
                    name: 'Flame Burst',
                    type: 'Fire',
                    damage: 30
                },
                {
                    name: 'Flame Charge',
                    type: 'Fire',
                    damage: 25
                },
                {
                    name: 'Flamethrower',
                    type: 'Fire',
                    damage: 55
                }
            ]
        },
        evolutions: [
            {
                name: 'Charmeleon',
                image: 'https://img.pokemondb.net/artwork/charmeleon.jpg'
            },
            {
                name: 'Charizard',
                image: 'https://img.pokemondb.net/artwork/charizard.jpg'
            }
        ]
    }
}
