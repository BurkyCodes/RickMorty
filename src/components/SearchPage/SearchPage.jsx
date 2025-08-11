import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "all");
  const [sort, setSort] = useState(searchParams.get("sort") || "name");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = {};
      if (query) params.q = query;
      if (status !== "all") params.status = status;
      if (sort !== "name") params.sort = sort;

      setSearchParams(params); // Updates URL
    }, 400);

    return () => clearTimeout(timeout);
  }, [query, status, sort, setSearchParams]);

  return     <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="all">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
      </select>

      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="name">Name</option>
        <option value="date">Date</option>
      </select>
    </div>;
};

export default SearchPage;
