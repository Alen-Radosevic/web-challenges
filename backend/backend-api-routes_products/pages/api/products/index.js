import { getAllProducts } from "@/services/productServices";

export default function handler(requeest, response) {
  response.status(200).json(getAllProducts());
}
