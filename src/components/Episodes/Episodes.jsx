import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { getEpisodes } from "../../apollo-graphql/queries";
import EpisodeCard from "./EpisodeCard";
import NotFound from "../Shared/NotFound";
import Pagination from "../Shared/Pagination";
import Filter from "../Filter/Filter";
import {  useSearchParams } from "react-router-dom";

const Episodes = () => {
 
  const [searchParams, setSearchParams] = useSearchParams();

  // Read search & page from URL params
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  const { loading, data } = useQuery(getEpisodes, {
    variables: {
      page,
      filter: {
        name: search,
      },
    }
  });

  // Update URL params whenever search/page changes
  useEffect(() => {
    const params = {};
    if (search) params.q = search;
    if (page > 1) params.page = page;
    setSearchParams(params);
  }, [search, page, setSearchParams]);

  // Handle search input
  const handleSearch = (val) => {
    setSearch(val.trim());
    setPage(1); // Reset to page 1 when searching
  };

  // Pagination controls
  const totalEpisodes = 51;
  const perPage = 20;
  const totalPages = Math.ceil(totalEpisodes / perPage);

  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleFirst = () => setPage(1);
  const handleLast = () => setPage(totalPages);

  const episodes = data?.episodes?.results || [];

  return (
    <div className="flex mt-8 items-center justify-center flex-col">
      <Filter
        placeHolder={"Search by episode..."}
        onSearch={handleSearch}
        defaultValue={search}
      />

      {loading ? (
        <div className="text-[#08CB00] h-[100px] font-semibold text-lg">
          Loading...
        </div>
      ) : episodes.length > 0 ? (
        <div className="flex items-center justify-center flex-wrap gap-4">
          {episodes.map((episode, index) => (
            <EpisodeCard episode={episode} key={index} />
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

export default Episodes;
