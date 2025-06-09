import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import { fetchBooks } from "@/lib/fetch-books";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const q = context.query.q;

  const searchBooks = await fetchBooks(q as string);

  return {
    props: {
      books: searchBooks,
    },
  };
};

export default function SearchPage({ books }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

SearchPage.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
