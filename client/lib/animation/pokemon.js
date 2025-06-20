/* 포켓몬 키우기 */

import { xhrPromise } from "../utils/xhr.js";
import { insert } from "../dom/index.js";


export async function getPokemonData() {
    const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/143');

    const src = data.sprites.other.showdown['front_default'];
    insert(document.body, `<img src="${src}" alt="" class="pokemon" />`, 'last')
}

getPokemonData();