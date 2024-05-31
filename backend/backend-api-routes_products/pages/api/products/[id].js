import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  const product = getProductById(id);

  if (!product) {
    response.status(2404).json({ status: "Is not exist" });
  }
  response.status(200).json(getProductById(id));
}
