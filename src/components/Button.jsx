import React, { useContext } from 'react'
import { FaBackspace } from "react-icons/fa";
import DataContext from '../context/DataContext'
const Button = () => {
  const {showButton,setAmount,amount}=useContext(DataContext)
  return (
    <footer className={`${showButton?`block`:`hidden`} lg:container mx-auto transition-all ease-linear duration-700 bg-blue-100 buttonComponentsHight`}>
        <div className='buttonComponentsWidth md:w-2/3 lg:w-1/2 mt-12 pt-5 mx-auto  grid grid-cols-3 gap-10'>
            <button onClick={()=>setAmount(amount+'7')} className=' transition-all ease-in-out duration-300  hover:scale-75 text-2xl bg-blue-600 text-white rounded-2xl py-2'>7</button>
            <button onClick={()=>setAmount(amount+'8')} className=' transition-all ease-in-out duration-300  hover:scale-75 text-2xl bg-blue-600 text-white rounded-2xl py-2' >8</button>
            <button onClick={()=>setAmount(amount+'9')} className=' transition-all ease-in-out duration-300  hover:scale-75 text-2xl bg-blue-600 text-white rounded-2xl py-2'>9</button>
            <button onClick={()=>setAmount(amount+'6')} className=' transition-all ease-in-out duration-300  hover:scale-75 text-2xl bg-blue-600 text-white rounded-2xl py-2'>6</button>
            <button onClick={()=>setAmount(amount+'5')} className=' transition-all ease-in-out duration-300  hover:scale-75 text-2xl bg-blue-600 text-white rounded-2xl py-2' >5</button>
            <button onClick={()=>setAmount(amount+'4')} className=' transition-all ease-in-out duration-300  hover:scale-75 text-2xl bg-blue-600 text-white rounded-2xl py-2'>4</button>
            <button onClick={()=>setAmount(amount+'3')} className=' transition-all ease-in-out duration-300  hover:scale-75 text-2xl bg-blue-600 text-white rounded-2xl py-2'>3</button>
            <button onClick={()=>setAmount(amount+'2')} className=' transition-all ease-in-out duration-300  hover:scale-75 text-2xl bg-blue-600 text-white rounded-2xl py-2' >2</button>
            <button onClick={()=>setAmount(amount+'1')} className=' transition-all ease-in-out duration-300  hover:scale-75 text-2xl bg-blue-600 text-white rounded-2xl py-2'>1</button>
            <button onClick={()=>setAmount(amount+'0')} className=' transition-all ease-in-out duration-300  hover:scale-75 text-2xl bg-blue-600 text-white rounded-2xl py-2'>0</button>
            <button onClick={()=>setAmount(amount+'.')} className=' transition-all ease-in-out duration-300  hover:scale-75 text-2xl bg-blue-600 text-white rounded-2xl py-2' >.</button>
            <button onClick={()=>setAmount(amount.slice(0,amount.length-1))} className=' transition-all ease-in-out duration-700  hover:scale-75 text-2xl bg-blue-600 text-white rounded-2xl py-2'><p className='flex justify-center'><FaBackspace /></p></button>
        </div>
    </footer>
  )
}

export default Button
