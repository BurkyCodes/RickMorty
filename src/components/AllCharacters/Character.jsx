import { useParams } from "react-router-dom";
import { getCharacterById } from "../../apollo-graphql/queries";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import NotFound from "../Shared/NotFound";
import { useFavorites } from "../../Hooks/useFavourite";


const Character = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  const { toggleFavorite, isFavorite } = useFavorites();

  const { loading, data } = useQuery(getCharacterById, {
    variables: {
      id,
    },
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (data?.character) {
      // console.log(data?.character);
      setCharacter(data?.character);
    }
  }, [loading, data]);

  return (
    <div>
      {loading ? (
        <div className="text-[#08CB00] h-[100px] font-semibold text-lg">
          Loading...
        </div>
      ) : character ? (
        <>
          <div className="mt-10  flex items-start justify-evenly">
            <div>
              <img src={character?.image} alt="" />
            </div>
            <div className="flex items-start flex-col">
              <button
                className="flex"
                onClick={() => toggleFavorite(character)}
              >
                {isFavorite(character?.id) ? "❤️" : "🖤"}
              </button>
              <h1 className="text-2xl font-semibold tracking-wider">
                {character?.name}
              </h1>
              <h2>Gender: {character.gender}</h2>
              <h3>Species: {character.species}</h3>
            </div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Character;
