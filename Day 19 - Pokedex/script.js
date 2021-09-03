const poke_container = document.querySelector('#poke-container')
const pokemon_count = 500
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_types = Object.keys(colors)


const fetchPokemons = async () => {
	for (let i = 1; i <= pokemon_count; i++) {
		await getPokemon(i)
	}
}

const getPokemon = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`
	const res = await fetch(url)
	const data = await res.json()
	const pokeType = data.types[0].type.name
	const color = colors[pokeType]
	createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
	const pokemondiv = document.createElement('div')
	pokemondiv.classList.add('pokemon')
	poke_container.appendChild(pokemondiv)
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
	const idPokemon = '#' + pokemon.id.toString().padStart(3, '0')
	const id = pokemon.id.toString()
	const pokeType = pokemon.types[0].type.name
	const color = colors[pokeType];
	pokemondiv.style.backgroundColor = color;
	const hp=pokemon.stats[0].base_stat
	const attack=pokemon.stats[1].base_stat
	const defense=pokemon.stats[2].base_stat
	style=document.createElement('style')
	style.innerHTML=` 
					.type{
						display:block;
						font-weight:bold;
					}
	
						`
	document.head.appendChild(style)

	
	pokemondiv.innerHTML = ` <div class="img-container">
							<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" alt="Bulbasaur">
  							</div>
							<div class="info">
								<span class="number">${idPokemon}</span>
								<h3 class="name">${name}</h3>
								<small class="type">Type: <span>${pokeType}</span></small>
								<small class="type as">HP: <span>${hp}</span></small>
								<small class="type as">Attack: <span>${attack}</span></small>
								<small class="type as">Defense: <span>${defense}</span></small>
							</div>`



}

fetchPokemons()