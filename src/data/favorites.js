export const favoritos = new Map()

export function getFavoritesByUser(userId) { 
    return favoritos.get(userId)
}

export function addFavorite(userId, character) {
  const favorite = {
    id: Date.now(),
    character,
    createdAt: new Date().toISOString(),
  };

  const current = getFavoritesByUser(userId);
  current.push(favorite);
  favoritesStore.set(userId, current);

  return favorite;
}

export function removeFavorite(userId, favoriteId) {
  const current = getFavoritesByUser(userId);
  const index = current.findIndex((fav) => fav.id === Number(favoriteId));

  if (index === -1) {
    return false;
  }

  current.splice(index, 1);
  favoritesStore.set(userId, current);
  return true;
}