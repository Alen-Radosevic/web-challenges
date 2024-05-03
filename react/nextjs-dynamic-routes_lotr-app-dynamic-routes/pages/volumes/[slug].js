import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router.js";

export default function VolumeDetail() {
  const router = useRouter();
  console.log(router);
  const { slug } = router.query;

  //   const volumeIndex = volumes.findIndex(
  //     ({ slug }) => slug === "the-return-of-the-king"
  //   );

  const volumeIndex = volumes.findIndex(
    ({ slug: volumeSlug }) => volumeSlug === slug
  );

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>

      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      <div>
        {previousVolume ? (
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        ) : null}
      </div>
      <div>
        {nextVolume ? (
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        ) : null}
      </div>
    </>
  );
}
