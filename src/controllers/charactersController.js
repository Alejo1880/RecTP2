import {
  getRandomCharacter, getCharacterById} from "../services/dragonballService.js";
import { getFavoritesByUser, addFavorite, removeFavorite} from "../data/favorites.js";


export async function getRandom(req, res) {
  try {
    const character = await getRandomCharacter();
    return res.status(200).json({ character });
  } catch (error) {
        return res.status(500).json({ error: "Error " });
  }
}


export async function addToFavorites(req, res) {
  const { characterId } = req.body;

  try {
    const character = await getCharacterById(characterId);

    if (character === null) {
      return res.status(404).json({
        error: `No existe un personaje con id ${characterId} en la API externa`,
      });
    }

    const favorite = addFavorite(req.user.id, character);

    return res.status(201).json({
      message: "Personaje agregado a favoritos",
      favorite,
    });
  } catch (error) {
    if (error instanceof ExternalApiError) {
      return res.status(503).json({
        error: "El servicio externo de Dragon Ball no está disponible",
      });
    }
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

export function listFavorites(req, res) {
  const favorites = getFavoritesByUser(req.user.id);
  return res.status(200).json({ favorites });
}


export function deleteFavorite(req, res) {
  const { id } = req.params;

  const wasRemoved = removeFavorite(req.user.id, id);

  if (!wasRemoved) {
    return res.status(404).json({
      error: `No existe un favorito con id ${id} para este usuario`,
    });
  }

  return res.status(200).json({ message: "Favorito eliminado correctamente" });
}