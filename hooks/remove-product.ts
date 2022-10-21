import { post } from "./fetcher";

const removeProduct = async (id: string) =>
  post("/amazon/remove-products", { id });

export default removeProduct;
