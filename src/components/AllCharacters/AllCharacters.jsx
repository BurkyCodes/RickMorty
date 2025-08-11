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
  const initialSpecies = searchParams.get("species") || "";
  const [species, setSpecies] = useState(initialSpecies);

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
        species: species || undefined,
      },
    },
  });

  const totalCharacters = 826;
  const perPage = 20;
  const totalPages = Math.ceil(totalCharacters / perPage);

  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    const params = {};
    if (search) params.q = search;
    if (species) params.species = species;
    if (page > 1) params.page = page;
    setSearchParams(params);
  }, [search, species, page, setSearchParams]);

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
      <div className="species-filter my-2">
        <label htmlFor="species-select" className="mr-2 text-[#253900]">
          Filter by species:
        </label>
        <select
          id="species-select"
          value={species}
          onChange={handleSpeciesChange}
          className="p-1 rounded border border-2"
        >
          <option value="">All</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
        </select>
      </div>

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
