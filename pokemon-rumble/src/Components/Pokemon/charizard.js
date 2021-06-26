const charizard = {
    name: 'Charizard',
    id: 6,
    level: 56,
    baseStats: [
        {
            "name": "hp",
            "value": 78
        },
        {
            "name": "attack",
            "value": 84
        },
        {
            "name": "defense",
            "value": 78
        },
        {
            "name": "special-attack",
            "value": 109
        },
        {
            "name": "special-defense",
            "value": 85
        },
        {
            "name": "speed",
            "value": 100
        }
    ],
    currentStats: [
        {
            "name": "hp",
            "value": 166
        },
        {
            "name": "attack",
            "value": 179
        },
        {
            "name": "defense",
            "value": 166
        },
        {
            "name": "special-attack",
            "value": 232
        },
        {
            "name": "special-defense",
            "value": 181
        },
        {
            "name": "speed",
            "value": 212
        }
    ],
    learnedMovesList: [
        {
            "name": "growl",
            "levelLearnedAt": 1,
            "accuracy": 100,
            "power": null,
            "type": "normal",
            "damageClass": "status"
        },
        {
            "name": "rage",
            "levelLearnedAt": 24,
            "accuracy": 100,
            "power": 20,
            "type": "normal",
            "damageClass": "physical"
        },
        {
            "name": "scratch",
            "levelLearnedAt": 1,
            "accuracy": 100,
            "power": 40,
            "type": "normal",
            "damageClass": "physical"
        },
        {
            "name": "leer",
            "levelLearnedAt": 1,
            "accuracy": 100,
            "power": null,
            "type": "normal",
            "damageClass": "status"
        },
        {
            "name": "wing-attack",
            "levelLearnedAt": 36,
            "accuracy": 100,
            "power": 60,
            "type": "flying",
            "damageClass": "physical"
        },
        {
            "name": "flamethrower",
            "levelLearnedAt": 46,
            "accuracy": 100,
            "power": 90,
            "type": "fire",
            "damageClass": "special"
        },
        {
            "name": "metal-claw",
            "levelLearnedAt": 1,
            "accuracy": 95,
            "power": 50,
            "type": "steel",
            "damageClass": "physical"
        },
        {
            "name": "heat-wave",
            "levelLearnedAt": 1,
            "accuracy": 90,
            "power": 95,
            "type": "fire",
            "damageClass": "special"
        },
        {
            "name": "air-slash",
            "levelLearnedAt": 1,
            "accuracy": 95,
            "power": 75,
            "type": "flying",
            "damageClass": "special"
        },
        {
            "name": "fire-fang",
            "levelLearnedAt": 28,
            "accuracy": 95,
            "power": 65,
            "type": "fire",
            "damageClass": "physical"
        },
        {
            "name": "inferno",
            "levelLearnedAt": 62,
            "accuracy": 50,
            "power": 100,
            "type": "fire",
            "damageClass": "special"
        },
        {
            "name": "ember",
            "levelLearnedAt": 1,
            "accuracy": 100,
            "power": 40,
            "type": "fire",
            "damageClass": "special"
        },
        {
            "name": "flare-blitz",
            "levelLearnedAt": 66,
            "accuracy": 100,
            "power": 120,
            "type": "fire",
            "damageClass": "physical"
        },
        {
            "name": "scary-face",
            "levelLearnedAt": 27,
            "accuracy": 100,
            "power": null,
            "type": "normal",
            "damageClass": "status"
        },
        {
            "name": "slash",
            "levelLearnedAt": 36,
            "accuracy": 100,
            "power": 70,
            "type": "normal",
            "damageClass": "physical"
        },
        {
            "name": "smokescreen",
            "levelLearnedAt": 1,
            "accuracy": 100,
            "power": null,
            "type": "normal",
            "damageClass": "status"
        },
        {
            "name": "flame-burst",
            "levelLearnedAt": 32,
            "accuracy": 100,
            "power": 70,
            "type": "fire",
            "damageClass": "special"
        },
        {
            "name": "shadow-claw",
            "levelLearnedAt": 1,
            "accuracy": 100,
            "power": 70,
            "type": "ghost",
            "damageClass": "physical"
        },
        {
            "name": "fire-spin",
            "levelLearnedAt": 55,
            "accuracy": 85,
            "power": 35,
            "type": "fire",
            "damageClass": "special"
        }
    ],
    currentMovesList: [
        {
            "name": "smokescreen",
            "levelLearnedAt": 1,
            "accuracy": 100,
            "power": null,
            "type": "normal",
            "damageClass": "status"
        },
        {
            "name": "flame-burst",
            "levelLearnedAt": 32,
            "accuracy": 100,
            "power": 70,
            "type": "fire",
            "damageClass": "special"
        },
        {
            "name": "shadow-claw",
            "levelLearnedAt": 1,
            "accuracy": 100,
            "power": 70,
            "type": "ghost",
            "damageClass": "physical"
        },
        {
            "name": "fire-spin",
            "levelLearnedAt": 55,
            "accuracy": 85,
            "power": 35,
            "type": "fire",
            "damageClass": "special"
        }
    ],
    spriteList: [
        {
            "name": "back_default",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png"
        },
        {
            "name": "back_female",
            "url": null
        },
        {
            "name": "back_shiny",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png"
        },
        {
            "name": "back_shiny_female",
            "url": null
        },
        {
            "name": "front_default",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        },
        {
            "name": "front_female",
            "url": null
        },
        {
            "name": "front_shiny",
            "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png"
        },

    ],
    types: [
        {
            "name": "fire",
            "url": "https://pokeapi.co/api/v2/type/10/"
        },
        {
            "name": "flying",
            "url": "https://pokeapi.co/api/v2/type/3/"
        }
    ]
}

export default charizard;