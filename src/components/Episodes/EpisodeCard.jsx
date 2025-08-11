import { Link } from "react-router-dom"


const EpisodeCard = ({episode}) => {
  return (
    <Link 
    to={`/episode/${episode?.id}`}
    className="episode-detail w-[200px] h-[100px] rounded shadow flex flex-col items-start justify-evenly px-2">
      <h1 className="font-bold text-white">{episode?.episode}</h1>
      <h2 className="truncate text-start w-full">{episode?.name}</h2>
      <p className="text-sm">Aired:{episode?.air_date}</p>
    </Link>
  )
}

export default EpisodeCard