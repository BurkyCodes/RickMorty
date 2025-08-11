import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEpisodeById } from "../../apollo-graphql/queries";
import NotFound from "../Shared/NotFound";
import CharacterCard from "../AllCharacters/CharacterCard";



const Episode = () => {
  const [episode, setEpisode] = useState(null);
  const { id } = useParams();

  const { loading, data } = useQuery(getEpisodeById, {
    variables: {
      id,
    },
    fetchPolicy: "no-cache",
  });
  useEffect(() => {
    if(data?.episode){
      console.log(data?.episode)
      setEpisode(data?.episode)
    }
  },[loading,data])
  return <div>
    {loading ? (
       <div className="text-[#08CB00] h-[100px] font-semibold text-lg">
          Loading...
        </div>
    ) : episode ? (<>
     <div className="my-4">
      <div className="mb-4 flex w-full items-center justify-start">
      <h1 className="text-2xl border-b-2 w-max">
        {episode?.episode}
      </h1>
      <h2 className="text-xl">({episode?.name})</h2>
           </div>
      <p className="text-start mb-2"> Aired: {episode?.air_date}</p>
 
      <div className="flex items-center justify-center flex-wrap gap-4">
        {episode?.characters.map((character,index) => (
          <CharacterCard character={character} key={index} />
        ))}
      </div>
     </div>
    </>): (
        <NotFound />
      )}
  </div>;
};

export default Episode;
