import { cities } from "@/lib/data";
import { useRouter } from "next/router";
import Link from "next/link";
import Navigation from "@/components/navigation";

export default function City() {
  const router = useRouter();

  if (!router.query) {
    return null;
  }
  const { slug } = router.query;
  const city = cities.find((city) => city.slug === slug);

  if (!city) {
    return null;
  }
  return (
    <>
      <h1>{city.name}</h1>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
      <p>Description: {city.description}</p>

      <Link href="/cities">Back to all cities</Link>
      <br></br>
      <Navigation currentSlug={city.slug} cities={cities} />
    </>
  );
}
