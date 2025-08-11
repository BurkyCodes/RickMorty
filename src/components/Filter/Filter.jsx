import React,{useState} from 'react'

const Filter = ({placeHolder,onSearch}) => {
    const [value, setValue] = useState("");

  return (
    <div className='my-4 flex sm:flex-row flex-col items-center gap-4 justify-center'>
        <input   
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)} 
        className='bg-[#fafafa] outline-none focus:border-2 border border-[#B4E50D] rounded-full py-2 px-2'
        placeholder={placeHolder} />
        <div className='flex gap-2 items-center justify-center'>
        <button 
        onClick={() => onSearch(value)}
        className='bg-[#B4E50D] py-2 cursor-pointer px-2  border border-[#B4E50D] rounded-full font-bold '>search</button>
        <button 
        onClick={() => {
          setValue("")
          onSearch("")
        }}
        className='py-2 cursor-pointer px-2  border border-[#253900] rounded-full font-bold  text-[#253900]'>Reset</button>
           
        </div>
    </div>
  )
}

export default Filter