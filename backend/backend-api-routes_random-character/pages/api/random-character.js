import Chance from "chance";

export default function handler(response) {
  const chance = new Chance();
  const character = {
    name: chance.name(),
    twitterName: chance.twitter(),
    geohash: chance.geohash(),
  };
  response.status(200).json(character);
}
