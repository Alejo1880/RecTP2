import axios from "axios";

const DRAGONBALL_URL = process.env.DRAGONBALL_URL;

export class ExternalApiError extends Error {
  constructor(message) {
    super(message);
    this.name = "ExternalApiError";
  }
}

export async function getAllCharacters() {
  try {
    const response = await axios.get(`${DRAGONBALL_URL}/characters`, {
      params: { limit: 10 }, 
    });
    const data = response.data;
    return Array.isArray(data) ? data : data.items;
  } catch (error) {
        throw new ExternalApiError("No se pudo obtener los personajes");
  }
}

export async function getCharacterById(characterId) {
  try {
    const response = await axios.get(
      `${DRAGONBALL_URL}/characters/${characterId}`
    );
    return response.data;
  } catch (error) {
        throw new ExternalApiError(`No se pudo obtener el personaje con id ${characterId}`
    );
  }
}


export async function getRandomCharacter() {
  const characters = await getAllCharacters();

  if (!characters || characters.length === 0) {
    throw new ExternalApiError("La API externa no devolvió personajes");
  }

  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

