import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SearchableLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onSubmit = () => {
    if (!search) return;
    if (q === search) return;

    router.push(`/search?q=${search}`);
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div>
      <div>
        <input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} placeholder="검색어를 입력해주세요..." />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
