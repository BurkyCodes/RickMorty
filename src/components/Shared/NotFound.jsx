import { FaExclamationCircle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="my-8 flex items-center flex-col justify-center gap-8">
      <div className="text-5xl text-red-500">
      <FaExclamationCircle />
      </div>
      <h1  className="text-2xl tracking-wider">
      NotFound
      </h1>
      
    </div>
  )
}

export default NotFound