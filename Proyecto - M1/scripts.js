// Tab logica
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active-tab"));
    tabContents.forEach((c) => c.classList.add("hidden"));

    btn.classList.add("active-tab");
    document
      .getElementById(`tab-${btn.dataset.tab}`)
      .classList.remove("hidden");
  });
});

// API - POKEMON
const BASE_URL = "https://pokeapi.co/api/v2";

// API - POKEMON - ID (Pokedex?) - ERROR
async function getPokemon(nameOrId) {
  const res = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
  if (!res.ok) throw new Error("Pokemon not found");
  return res.json();
}

// API - POKEMON - SSPECIES - ERROR
async function getPokemonSpecies(nameOrId) {
  const res = await fetch(`${BASE_URL}/pokemon-species/${nameOrId}`);
  if (!res.ok) throw new Error("Species not found");
  return res.json();
}

// API - POKEMON - INTENTO DE CADENA DE EVOLUCION - ERROR
async function getEvolutionChain(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Evolution chain not found");
  return res.json();
}

// API - POKEMON - FULL POKEMON INFO (Por si el resto no funciona)
async function getFullPokemonData(nameOrId) {
  const pokemon = await getPokemon(nameOrId);
  const species = await getPokemonSpecies(nameOrId);
  const evolutionChain = await getEvolutionChain(species.evolution_chain.url);

  return { pokemon, species, evolutionChain };
}

//  // API - POKEMON - Flavour Text (Try1)
function getEnglishFlavorText(species) {
  const entry = species.flavor_text_entries.find(
    (e) => e.language.name === "en",
  );
  return entry
    ? entry.flavor_text.replace(/\f|\n/g, " ")
    : "No description available.";
}

// API - POKEMON - SSPECIES - GENUS - TRY1
function getEnglishGenus(species) {
  const genus = species.genera.find((g) => g.language.name === "en");
  return genus ? genus.genus : "Unknown";
}

// API - POKEMON - SSPECIES - REGION - TRY1

function getRegion(species) {
  return (
    species.generation?.name?.replace("generation-", "").toUpperCase() ??
    "Unknown"
  );
}

// API - POKEMON - SSPECIES - HABITAT - TRY1

function getHabitat(species) {
  return species.habitat?.name ?? "Unknown";
}

// API - POKEMON - TIPO - TR1

function getTypes(pokemon) {
  return pokemon.types.map((t) => t.type.name);
}

// API - POKEMON - SPRITES - TRY1

function getSprites(pokemon) {
  return {
    front: pokemon.sprites.front_default,
    back: pokemon.sprites.back_default,
    frontShiny: pokemon.sprites.front_shiny,
    backShiny: pokemon.sprites.back_shiny,
  };
}

// API - POKEMON - SSPECIES - EVOLUTION CHAIN (IM NOT SURE)

function parseEvolutionChain(chain) {
  const evolutions = [];

  function traverse(node) {
    const current = {
      name: node.species.name,
      evolvesTo: node.evolves_to.map((e) => ({
        name: e.species.name,
        details: e.evolution_details[0] ?? {},
      })),
    };
    evolutions.push(current);
    node.evolves_to.forEach(traverse);
  }

  traverse(chain.chain);
  return evolutions;
}
