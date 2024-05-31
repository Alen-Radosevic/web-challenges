import { useRouter } from "next/router";
import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR("/api/products/", fetcher);

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  const productData = data.find((product) => product.id === id);

  return (
    <section>
      <h2>{productData.name}</h2>
      <p>{productData.description}</p>
    </section>
  );
}
