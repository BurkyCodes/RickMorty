import React, { useEffect, useState } from "react";
import { getCharacters } from "../../apollo-graphql/queries";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom"; // <-- For URL params
import CharacterCard from "./CharacterCard";
import NotFound from "../Shared/NotFound";
import Pagination from "../Shared/Pagination";
import Filter from "../Filter/Filter";

const AllCharacters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read initial state from URL
  const initialSearch = searchParams.get("q") || "";
  const initialPage = Number(searchParams.get("page")) || 1;

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [search, setSearch] = useState(initialSearch);

  const { loading, data } = useQuery(getCharacters, {
    variables: {
      page,
      filter: {
        name: search,
      },
    }
  });

  const totalCharacters = 826;
  const perPage = 20;
  const totalPages = Math.ceil(totalCharacters / perPage);

  // Keep URL in sync when page or search changes
  useEffect(() => {
    const params = {};
    if (search) params.q = search;
    if (page > 1) params.page = page;
    setSearchParams(params);
  }, [search, page, setSearchParams]);

  // Set characters when data loads
  useEffect(() => {
    if (data?.characters?.results) {
      setCharacters(data.characters.results);
    }
  }, [loading, data]);

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => (prev > 1 ? prev - 1 : prev));
  const handleFirst = () => setPage(1);
  const handleLast = () => setPage(totalPages);

  return (
    <div className="flex items-center justify-center flex-col">
      <Filter
        placeHolder={"Search character name..."}
        onSearch={(val) => {
          setSearch(val);
          setPage(1);
        }}
        initialValue={search} 
      />

      {loading ? (
        <div className="text-[#08CB00] h-[100px] font-semibold text-lg">
          Loading...
        </div>
      ) : characters.length > 0 ? (
        <div className="flex items-center justify-center flex-wrap gap-4">
          {characters.map((character, index) => (
            <CharacterCard character={character} key={index} />
          ))}
        </div>
      ) : (
        <NotFound />
      )}

      <Pagination
        page={page}
        onNext={handleNext}
        onPrev={handlePrev}
        onFirst={handleFirst}
        onLast={handleLast}
        totalPages={totalPages}
      />
    </div>
  );
};

export default AllCharacters;
