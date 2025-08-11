import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className=" header flex items-end justify-between w-full">
      <div>
        <div className="w-[80px] h-[80px] rounded-full overflow-hidden   shadow-md shadow-[#78C841]  ">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="a logo" className="w-full object-cover  flex items-center justify-center"/>
        </div>
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <NavLink 
          to={""}
          className={({isActive}) => `uppercase tracking-wider text-lg sm:text-2xl text-[#253900] ${isActive ? "border-b-2 font-semibold ":""}`}>
            Characters
            </NavLink>
          <NavLink
          to={"episodes"} 
                   className={({isActive}) => `uppercase tracking-wider text-lg sm:text-2xl text-[#253900] ${isActive ? "border-b-2 font-semibold ":""}`}>
              Episodes
            </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Header