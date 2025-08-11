import { Link } from "react-router-dom";
import { useFavorites } from "../../Hooks/useFavourite";


const CharacterCard = ({ character }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  return (
    <div className="rounded cursor-pointer relative flex justify-between flex-col items-start overflow-hidden w-[120px] h-[120px] md:w-[200px] md:h-[200px] shadow">
      <Link
        to={`/character/${character?.id}`}
        className="flex items-center h-[80px]  sm:h-[150px] overflow-hidden justify-center object-cover"
      >
        <img src={character?.image} alt={character?.name} />
      </Link>
      <div className="character-detail flex items-center justify-between w-full border-b border-b-green-500 py-1 px-2">
        <h1 className="text-[#fff] truncate w-1/2">{character?.name}</h1>
        <button className="flex" onClick={() => toggleFavorite(character)}>
          {isFavorite(character?.id) ? "❤️" : "🖤"}
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
