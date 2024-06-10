import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  const place = await Place.findById(id);

  if (!id) {
    return;
  }
  if (request.method === "GET") {
  }

  if (!place) {
    return response.status(404).json({ status: "Not found" });
  }

  response.status(200).json(place);

  if (request.method === "PUT") {
    const editPlace = request.body;
    await Place.findByIdAndUpdate(id, editPlace);

    return response.status(200).json({ status: "Place successfully updated." });
  }

  if (request.method === "DELETE") {
    await Place.findByIdAndDelete(id);

    response.status(200).json({ status: `Place successfully deleted.` });
  }
}
