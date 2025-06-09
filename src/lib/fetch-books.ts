import { BookData } from "@/type";

export async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = "http://localhost:12345/book";

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err: unknown) {
    console.error(err);

    return [];
  }
}

export async function fetchRandomBooks(): Promise<BookData[]> {
  const url = "http://localhost:12345/book/random";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err: unknown) {
    console.error(err);

    return [];
  }
}

export async function fetchBookById(id: string): Promise<BookData | null> {
  const url = `http://localhost:12345/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err: unknown) {
    console.error(err);

    return null;
  }
}
