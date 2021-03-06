import Pokemon from './pokemonClass.js';

async function getNewPokemon(identifier, level) {

    const newPokemon = new Pokemon(identifier, level);

    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${identifier}`; //adjusts url based on id given
        const response = await fetch(url);
        const data = await response.json();
        newPokemon.name = data.name;
        newPokemon.id = data.id;
        newPokemon.baseExperience = data.base_experience;
        newPokemon.currentExperience = Math.pow(newPokemon.level, 3);

        //get moves
        await data.moves.map(async function(move) {
            const moveUrl = move.move.url; //gets move url from pokemon info
            const moveDataResponse = await fetch(moveUrl); //fetch move info
            const moveData = await moveDataResponse.json(); //convert move info to json
            const levelLearned = move.version_group_details[0].level_learned_at; //get info when the pokemon learns the move         
            
            const moveInfo = { //consolidates move info to add to array
                name: moveData.name,
                levelLearnedAt: parseInt(levelLearned, 10),
                accuracy: parseInt(moveData.accuracy, 10),
                power: parseInt(moveData.power, 10),
                type: moveData.type.name,
                damageClass: moveData.damage_class.name
            }
            // newPokemon.availableMovesList.push(moveInfo);
            if (levelLearned !== 0) { //only adds moves the pokemon will learn naturally by leveling up
                newPokemon.learnedMovesList.push(moveInfo);
            }
            if (newPokemon.level >= levelLearned && levelLearned !== 0) { //adds moves to current moves depending on pokemon's level
                newPokemon.currentMovesList.push(moveInfo);
                if (newPokemon.currentMovesList.length > 4) {
                    newPokemon.currentMovesList.shift();
                }
            }
        });

        //get stats
        data.stats.map(async function(stat) {
            const statName = stat.stat.name;
            const baseStatValue = stat.base_stat;
            const baseStat = {name: statName, value: parseInt(baseStatValue)};
            const currentStat = {name: statName, value: 0}
            
            if (statName === 'hp') {
                currentStat.value = Math.floor((2*parseInt(baseStatValue, 10)*newPokemon.level)/100 + newPokemon.level +10)
            } else {
                currentStat.value = Math.floor((2*parseInt(baseStatValue, 10)*newPokemon.level)/100 + 5)
            }

            newPokemon.baseStats.push(baseStat);
            newPokemon.currentStats.push(currentStat)
        });

        //get types
        data.types.map(async function(type) {
            const typeName = type.type.name;
            const typeUrl = type.type.url;
            const typeObject = {name: typeName, url: typeUrl};

            newPokemon.types.push(typeObject);

        })

        //get sprites
        for (let spriteKey in data.sprites) {
            const spriteName = spriteKey;
            const spriteUrl = data.sprites[spriteKey];
            const spriteObject = {name: spriteName, url: spriteUrl};
            if (spriteName !== 'versions' && spriteName !== 'other') {
                newPokemon.spriteList.push(spriteObject);
            }
        }

    } catch(error) {
        console.log(error);
    } finally {
        console.log(newPokemon);
        return newPokemon;
    }
}

export default getNewPokemon;