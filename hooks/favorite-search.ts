import { post } from "./fetcher";

const favoriteSearch = async (id: string) =>
  post("/amazon/favorite-search", { id });

export default favoriteSearch;
