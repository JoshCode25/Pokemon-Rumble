const pikachu = {
    name: 'Pikachu',
    id: 25,
    level: 35,
    baseStats: [
        {
            "name": "hp",
            "value": 35
        },
        {
            "name": "attack",
            "value": 55
        },
        {
            "name": "defense",
            "value": 40
        },
        {
            "name": "special-attack",
            "value": 50
        },
        {
            "name": "special-defense",
            "value": 50
        },
        {
            "name": "speed",
            "value": 90
        }
    ],
    currentStats: [
        {
            "name": "hp",
            "value": 60
        },
        {
            "name": "attack",
            "value": 94
        },
        {
            "name": "defense",
            "value": 68
        },
        {
            "name": "special-attack",
            "value": 85
        },
        {
            "name": "special-defense",
            "value": 85
        },
        {
            "name": "speed",
            "value": 153
        }
    ],
    learnedMovesList: [
        {
            "name": "thunder-shock",
            "levelLearnedAt": 1,
            "accuracy": 100,
            "power": 40,
            "type": "electric",
            "damageClass": "special"
        },
        {
            "name": "slam",
            "levelLearnedAt": 20,
            "accuracy": 75,
            "power": 80,
            "type": "normal",
            "damageClass": "physical"
        },
        {
            "name": "agility",
            "levelLearnedAt": 33,
            "accuracy": null,
            "power": null,
            "type": "psychic",
            "damageClass": "status"
        },
        {
            "name": "quick-attack",
            "levelLearnedAt": 16,
            "accuracy": 100,
            "power": 40,
            "type": "normal",
            "damageClass": "physical"
        },
        {
            "name": "light-screen",
            "levelLearnedAt": 50,
            "accuracy": null,
            "power": null,
            "type": "psychic",
            "damageClass": "status"
        },
        {
            "name": "tail-whip",
            "levelLearnedAt": 6,
            "accuracy": 100,
            "power": null,
            "type": "normal",
            "damageClass": "status"
        },
        {
            "name": "thunder-wave",
            "levelLearnedAt": 9,
            "accuracy": 90,
            "power": null,
            "type": "electric",
            "damageClass": "status"
        },
        {
            "name": "thunder",
            "levelLearnedAt": 43,
            "accuracy": 70,
            "power": 110,
            "type": "electric",
            "damageClass": "special"
        },
        {
            "name": "growl",
            "levelLearnedAt": 1,
            "accuracy": 100,
            "power": null,
            "type": "normal",
            "damageClass": "status"
        },
        {
            "name": "play-nice",
            "levelLearnedAt": 7,
            "accuracy": null,
            "power": null,
            "type": "normal",
            "damageClass": "status"
        },
        {
            "name": "electro-ball",
            "levelLearnedAt": 18,
            "accuracy": 100,
            "power": null,
            "type": "electric",
            "damageClass": "special"
        },
        {
            "name": "spark",
            "levelLearnedAt": 26,
            "accuracy": 100,
            "power": 65,
            "type": "electric",
            "damageClass": "physical"
        },
        {
            "name": "discharge",
            "levelLearnedAt": 37,
            "accuracy": 100,
            "power": 80,
            "type": "electric",
            "damageClass": "special"
        },
        {
            "name": "feint",
            "levelLearnedAt": 29,
            "accuracy": 100,
            "power": 30,
            "type": "normal",
            "damageClass": "physical"
        },
        {
            "name": "swift",
            "levelLearnedAt": 26,
            "accuracy": null,
            "power": 60,
            "type": "normal",
            "damageClass": "special"
        },
        {
            "name": "nuzzle",
            "levelLearnedAt": 23,
            "accuracy": 100,
            "power": 20,
            "type": "electric",
            "damageClass": "physical"
        }
    ],
    currentMovesList: [
        {
            "name": "spark",
            "levelLearnedAt": 26,
            "accuracy": 100,
            "power": 65,
            "type": "electric",
            "damageClass": "physical"
        },
        {
            "name": "feint",
            "levelLearnedAt": 29,
            "accuracy": 100,
            "power": 30,
            "type": "normal",
            "damageClass": "physical"
        },
        {
            "name": "swift",
            "levelLearnedAt": 26,
            "accuracy": null,
            "power": 60,
            "type": "normal",
            "damageClass": "special"
        },
        {
            "name": "nuzzle",
            "levelLearnedAt": 23,
            "accuracy": 100,
            "power": 20,
            "type": "electric",
            "damageClass": "physical"
        }
    ],
    spriteList: [
        {
            "name": "back_default",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
        },
        {
            "name": "back_female",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png"
        },
        {
            "name": "back_shiny",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png"
        },
        {
            "name": "back_shiny_female",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png"
        },
        {
            "name": "front_default",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        },
        {
            "name": "front_female",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png"
        },
        {
            "name": "front_shiny",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png"
        },
        {
            "name": "front_shiny_female",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png"
        }
    ],
    types: [
        {
            "name": "electric",
            "url": "https://pokeapi.co/api/v2/type/13/"
        }
    ]
}

export default pikachu;