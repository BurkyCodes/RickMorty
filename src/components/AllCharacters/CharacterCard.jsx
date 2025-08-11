import { Link } from "react-router-dom"

const CharacterCard = ({ character }) => {
  return (
       <Link 
    to={`/character/${character?.id}`}
    className="rounded cursor-pointer relative flex justify-between flex-col items-start overflow-hidden w-[120px] h-[120px] md:w-[200px] md:h-[200px] shadow">
      <div className="flex items-center h-[80px]  sm:h-[150px] overflow-hidden justify-center object-cover">
        <img src={character?.image} alt={character?.name} />
      </div>
      <div className="character-detail flex items-center justify-between w-full border-b border-b-green-500 py-1 px-2">
      <h1 className="text-[#fff]">{character?.name}</h1>
      </div>
    </Link>
  );
};

export default CharacterCard;
