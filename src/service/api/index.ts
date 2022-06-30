export enum FilmsAPI {
  getFilms = "/api/films",
  getFilmById = "/api/films/",
}

export enum FavoritesAPI {
  addFavorite = "/api/favorites",
  getFavorites = "/api/favorites",
  removeFavorite = "/api/favorites/",
  getFavoriteById = "/api/favorites/",
}

export enum AuthAPI {
  reg = "/api/auth/register ",
  log = "/api/auth/login",
}

export enum GanreAPI {
  POST = "​/api/genres",
  GET = "/api/genres",
  GETID = "/api/genres/{id}",
  DELETE = "/api/genres/{id}",
}
