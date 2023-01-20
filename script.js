const fetchPokemon = async (pokemon) => {
    const apiResponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`); 
    
    if(apiResponse.status === 200) {
    
    const data = await apiResponse.json();
    return data;
}
}

const renderPokemon = async (pokemon) => {
    const pokemonName = document.querySelector('.pokemon_name');
    const data = await fetchPokemon(pokemon);
    
    if(data){
        const pokemonName = document.querySelector('.pokemon_name');
        const pokemonImage = document.querySelector('.pokemon_image');
        const pokemonId = document.querySelector('.pokemon_number');
        pokemonName.innerHTML = data.name;
        pokemonImage.style.display = 'block';
        pokemonImage.src = data.sprites.front_default;
        pokemonId.innerHTML = data.id;
    }
    else {
        const pokemonImage = document.querySelector('.pokemon_image');
        pokemonImage.style.display = 'none';
        const pokemonName = document.querySelector('.pokemon_name');
        pokemonName.innerHTML = 'Pokemon not found';
        const pokemonId = document.querySelector('.pokemon_number');
        pokemonId.innerHTML = '';
    }
   
}


window.onload = function() {
    renderPokemon(1);

    const form = document.querySelector('.form');
    const input = document.querySelector('.input_search');

    const btnnext = document.querySelector('.btn-next');
    const btnprev = document.querySelector('.btn-prev');

    btnprev.addEventListener('click', (event) => {
        event.preventDefault();
        const pokemonId = document.querySelector('.pokemon_number');
        const pokemonIdNumber = pokemonId.innerHTML;
        renderPokemon(parseInt(pokemonIdNumber) - 1);
        
    });


    btnnext.addEventListener('click', (event) => {
        event.preventDefault();
        const pokemonId = document.querySelector('.pokemon_number');
        const pokemonIdNumber = pokemonId.innerHTML;
        renderPokemon(parseInt(pokemonIdNumber) + 1);
        
    });
       
    form.addEventListener('submit', (event) => {
        
        event.preventDefault();
        const pokemon = input.value.toLowerCase();
        renderPokemon(pokemon);
        input.value = '';
});
}