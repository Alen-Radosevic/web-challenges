import useSWR from "swr";

export default function AllListingsPage() {
  const { data: products } = useSWR("/api/products");
}
