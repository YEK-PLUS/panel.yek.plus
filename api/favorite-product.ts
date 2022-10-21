import { post } from "./fetcher";

const favoriteProduct = async (asin: string) =>
  post("/amazon/favorite-product", { asin });

export default favoriteProduct;
