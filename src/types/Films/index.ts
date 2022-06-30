export interface Film {
  id: string;
  name: string;
  description: string;
  genreName: string;
  imagePath: string;
  inTrend: boolean;
  duration: null | string;
  productionCompany: null | string;
  trailer: null | string;
  countryOfOrigin: null | string;
  director: null | string;
  subtitleLanguage: null | string;
  imdbRating: number;
  mpaaRating: null | string;
  createDate: string;
}
