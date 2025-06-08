// Para cuando se implemente la paginacion
// export async function getCharacters() {
//   const response = await fetch(`https://rickandmortyapi.com/api/character?page=${5}`);
//   const data = await response.json();
//   return data;
// }

export async function getCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data;
}

export async function getEpisodes() {
  const response = await fetch("https://rickandmortyapi.com/api/episode");
  const data = await response.json();
  return data;
}
export async function getLocations() {
  const response = await fetch("https://rickandmortyapi.com/api/location");
  const data = await response.json();
  return data;
}