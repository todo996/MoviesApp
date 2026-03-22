import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q");

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold">Search</h1>
      <p className="mt-4 text-white/70">
        Từ khóa tìm kiếm: {keyword || "Chưa có từ khóa"}
      </p>
    </div>
  );
}

export default SearchPage;