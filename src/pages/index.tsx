import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import { fetchBooks, fetchRandomBooks } from "@/lib/fetch-books";

export const getStaticProps = async () => {
  // 컴포넌트보다 먼저 실행되는 함수
  // return 형식은 Next JS의 문법에 따라 props객체를 포함하는 객체를 반환해야 한다.
  // Server에서 실행되기 때문에 Browser API를 호출하면 Error가 발생한다.

  const [allBooks, randomBooks] = await Promise.all([fetchBooks(), fetchRandomBooks()]);

  return {
    props: {
      allBooks,
      randomBooks,
    },
  };
};
export default function Home({ allBooks, randomBooks }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <section className={style.container}>
        <h3>지금 추천하는 도서</h3>
        {randomBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section className={style.container}>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
