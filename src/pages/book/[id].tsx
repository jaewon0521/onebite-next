import { useRouter } from "next/router";

export default function BookPage() {
  const router = useRouter();

  const { id } = router.query;

  return <h1>Book {id}</h1>;
}
