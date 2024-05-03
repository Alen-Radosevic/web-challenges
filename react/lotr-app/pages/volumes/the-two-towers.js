import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Volumes2() {
  const dataVolume2 = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <>
      <Link href="../">← All Volumes</Link>
      <h1>{dataVolume2.title}</h1>
      <p>{dataVolume2.description}</p>
      <ul>
        <li>
          {dataVolume2.books[0].ordinal}: {dataVolume2.books[0].title}
        </li>
        <li>
          {dataVolume2.books[1].ordinal}: {dataVolume2.books[1].title}
        </li>
      </ul>
      <Image
        src="/images/the-two-towers.png"
        height={230}
        width={140}
        alt="the bookcover of the two towers"
      />
    </>
  );
}
